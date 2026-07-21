const Spinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <span className="loading loading-infinity loading-xl text-pink-500"></span>
                <p className="text-pink-500 font-medium">Loading...</p>
            </div>
        </div>
    );
};

export default Spinner;