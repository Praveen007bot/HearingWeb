import Footer from "./Footer";
import Header from "./Header";

const Results = () => {
  return (
    <div className="h-screen bg-gradient-to-bl from-cyan-500 to-blue-500 flex flex-col justify-between">
      <Header title={"Results"} />
      <div className="flex-grow">
        <h1>Results</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Results;
