function GenerateDataButton({handleClick}) {
    return (
        <div class="grid">
            <button onClick={handleClick} class="justify-self-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-3">Generar datos</button>
        </div>);
}
export default GenerateDataButton;
