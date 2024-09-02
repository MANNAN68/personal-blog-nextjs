import style from "./Memories.module.css";

const Memories = () => {
  return (
    <div className={style.memories}>
      <div className="container-fluid h-100">
        <header
          className={`h-100 d-flex flex-column gap-3  justify-content-center ${style.memoriesContent}`}
        >
          <h2 className="text-white ">Hang onto your memories</h2>
          <p className="text-white ">
            Save the moments that matter. Blogger lets you safely store
            thousands of posts, photos, and more with Google.
          </p>
        </header>
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Memories;
