import React from 'react';
import Form from 'components/Form';
import Map from 'components/Map';
import Swal from 'sweetalert2';
import * as Manki from 'api/manki';
import './App.css';

export const appDataContext = React.createContext({} as {
  adminId: Manki.AdminId | undefined;
  passableInfo: Manki.PassableInfo[];
});

function App() {
  const [adminId, setAdminId] = React.useState<Manki.AdminId>();
  const [passableInfo, setPassableInfo] = React.useState<Manki.PassableInfo[]>([]);

  async function makeAdminId() {
    const { adminName, adminPass } = await (async () => {
      let adminNameResult, adminPassResult;
      do {
        adminNameResult = await Swal.fire({
          titleText: '管理者名を入力してください',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off',
            required: 'on',
          },
          validationMessage: '省略できません',
          allowOutsideClick: false,
          allowEscapeKey: false,
          showCancelButton: false,
        });
        adminPassResult = await Swal.fire({
          titleText: 'パスワードを入力してください',
          input: 'password',
          inputAttributes: {
            autocapitalize: 'off',
            required: 'on',
          },
          validationMessage: '省略できません',
          allowOutsideClick: false,
          showCancelButton: true,
          cancelButtonText: '戻る',
        });
      } while (!adminPassResult.isConfirmed);
      return {
        adminName: adminNameResult.value,
       adminPass: adminPassResult.value,
      };
    })();
    const adminId = await Manki.loginAdmin(adminName, adminPass);
    if (adminId instanceof Error) {
      Swal.disableButtons();
      Swal.fire({
        titleText: 'ログインに失敗しました',
        text: adminId.message + '続行するにはリロードしてください',
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        showConfirmButton: false,
        willClose: () => window.location.reload(),
      });
      return null;
    }
    setAdminId(adminId);
    return adminId;
  }

  async function getPassableInfo(adminId: Manki.AdminId) {
    const result = await Manki.getPassableAdmin(adminId);
    if (result instanceof Error) {
        void await Manki.terminateAdmin(adminId);
        Swal.disableButtons();
        Swal.fire({
            titleText: '通行可能領域の取得に失敗しました',
            text: result.message + '続行するにはリロードしてください。',
            icon: 'error',
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            showConfirmButton: false,
            willClose: () => window.location.reload(),
        });
        return null;
    }
    setPassableInfo(result);
    return result;
}

  const didLogRef = React.useRef(false);
  React.useEffect(() => {
    if (!didLogRef.current) {
      didLogRef.current = true;
      makeAdminId().then((result) => {
        if (result === null) {
          return null;
        }
        getPassableInfo(result);
      });
    }
  }, []);

  return (
    <appDataContext.Provider value={{adminId, passableInfo}}>
      <div className="main-area">
        <Form />
        <Map />
      </div>
    </appDataContext.Provider>
  );
}

export default App;
