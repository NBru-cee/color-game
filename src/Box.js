const Box = ({ color, hex, dark }) => {
    return (
        <div
            className="w-[300px] h-[200px] border-2 border-slate-600 shadow-xl rounded-md grid place-content-center"
            style={{
                backgroundColor: color,
                color: dark ? "#000" : "#fff",
            }}
        >
            <p className="text-2xl">{color ? color : "Empty Vale"}</p>
            <p className="text-2xl">{hex ? hex : null}</p>
        </div>
    );
};

export default Box;
