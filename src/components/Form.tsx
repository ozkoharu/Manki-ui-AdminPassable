import React from 'react';
import * as App from 'App';
import * as Manki from 'api/manki';
import './Form.css';
import Swal from 'sweetalert2';

function Form() {
    const adminId = React.useContext(App.appDataContext).adminId as Manki.AdminId;
    const passableInfo = React.useContext(App.appDataContext).passableInfo;

    async function terminate() {
        const result = await Manki.terminateAdmin(adminId);
        if (result instanceof Error) {
            return;
        }
        window.location.reload();
    }
    async function commit() {
        console.log('passableInfo', JSON.stringify(passableInfo));
        const result = await Manki.setPassableAdmin(adminId, passableInfo);
        if (result instanceof Error) {
            Swal.fire({
                titleText: 'エラー',
                text: result.message,
                icon: 'error',  
            });
            return false;
        }
        // terminate();
    }
    return (
        <form id="form" className="the-form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
                <legend>やっぱりやめる</legend>                    
                <button onClick={() => terminate()}>戻る</button>
            </fieldset>
            <fieldset>
                <legend>追加・削除</legend>
                <label>
                    <input type="radio" name="mode" value="add" />
                    追加
                </label>
                <label>
                    <input type="radio" name="mode" value="del" />
                    削除
                </label>
            </fieldset>
            <fieldset>
                <legend>半径</legend>                    
                <label>
                    半径:
                    <input type="number" id="radius" min="0" />
                    m
                </label>
            </fieldset>
            <fieldset>
                <legend>確定</legend>                    
                <button onClick={() => commit()}>確定する</button>
            </fieldset>
        </form>
    );
}

export default Form;
