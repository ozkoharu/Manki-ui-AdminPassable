import './Form.css';

function Form() {
    return (
        <form className="the-form" onSubmit={(e) => e.preventDefault()}>
            <fieldset>
                <legend>やっぱりやめる</legend>                    
                <button>戻る</button>
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
                <button>確定する</button>
            </fieldset>
        </form>
    );
}

export default Form;
