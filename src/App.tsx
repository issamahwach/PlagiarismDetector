import { useState, useEffect } from "react";
import Plagiarism from "./lib/plagiarism";
function App() {
  const [inputText, setInputText] = useState({
    firstText: "",
    secondText: "",
  });
  const [disabled, setDisabled] = useState<boolean>(false);
  const [result, setResult] = useState<string | number>("");

  useEffect(() => {
    if (inputText.firstText === "" || inputText.secondText === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [inputText]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInputText((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const plagiarismValue: number | string = Plagiarism.checkPlagiarism(
      inputText.firstText,
      inputText.secondText,
      "percentage"
    );
    setResult(plagiarismValue);
  };

  return (
    <>
      <div className="bg-[url('/bg.svg')] bg-cover min-h-screen flex flex-col justify-center px-4 py-12 lg:px-0 lg:py-0">
        <div className="flex flex-row justify-center items-center">
          <img src="/logo.png" className="w-48" />
        </div>
        <div className="mt-10 border border-dashed w-64 h-16 mx-auto flex flex-col justify-center items-center">
          {result !== "" ? (
            <>
              <p className="text-sm text-white">Result:</p>
              <p className="text-3xl text-white font-bold">{result}</p>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
        <form onSubmit={handleSubmit} className="mt-6 max-w-5xl mx-auto w-full">
          <div className="w-full flex flex-col lg:flex-row gap-14">
            <div className="w-full lg:w-1/2">
              <textarea
                placeholder="Enter first text"
                rows={15}
                className="w-full bg-white rounded-lg shadow-2xl shadow-black/75 resize-none"
                name="firstText"
                value={inputText.firstText}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="w-full lg:w-1/2">
              <textarea
                placeholder="Enter second text"
                rows={15}
                className="w-full bg-white rounded-lg shadow-2xl shadow-black/75 resize-none"
                name="secondText"
                value={inputText.secondText}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-10">
            <button
              type="submit"
              disabled={disabled}
              className="bg-indigo-950 px-6 py-2 text-white font-semibold uppercase rounded-lg shadow-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Measure Plagiarism
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
