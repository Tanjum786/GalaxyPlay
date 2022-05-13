import "./chips.css";
export const Chips = () => {
  return (
      <nav className="chips-container">
        <div className="chips-list dis_flex">
          <button className="btn-singer-name">All</button>
          <button className="btn-singer-name">Arjit Singh</button>
          <button className="btn-singer-name">Shreya Ghoshal</button>
          <button className="btn-singer-name">Rahat Fateh Ali Khan</button>
          <button className="btn-singer-name">Jubin Nautiyal</button>
          <button className="btn-singer-name">Atif Aslam</button>
        </div>
      </nav>
  );
};