import React from 'react';
import Main from 'Main';
import Swal from 'sweetalert2';

function App() {
  async function onLoad() {
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
    console.debug(adminName, adminPass);
  }

  const didLogRef = React.useRef(false);
  React.useEffect(() => {
    if (!didLogRef.current) {
      didLogRef.current = true;
      onLoad();
    }
  }, []);

  return (
    <Main />
  );
}

export default App;
