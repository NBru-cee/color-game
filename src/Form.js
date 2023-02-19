import colorNames from "colornames";
const Form = ({ color, setColor, setHex, dark, setDark }) => {
    return (
        <form className="w-[300px]">
            <label htmlFor="color" className="absolute -top-96">
                Add Color
            </label>
            <input
                id="color"
                autoFocus
                type="text"
                className="mt-2 p-2 w-full text-2xl shadow-xl rounded-md outline-none border-2 border-slate-600"
                placeholder="Add Color...."
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHex(colorNames(e.target.value));
                }}
            />
            <button
                type="button"
                onClick={() => setDark(!dark)}
                className="border-2 border-slate-600 border-solid p-2 rounded-md text-xl mt-2 w-full bg-slate-600 text-white"
            >
                Toggle Text Color
            </button>
        </form>
    );
};

export default Form;
