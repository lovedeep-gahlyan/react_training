import AutoSuggest from "./AutoSuggest";

const ListBox = () => {
  const wordList = ["iphone", "ipad", "macbook"];

  return <AutoSuggest suggestions={wordList} />;
};

export default ListBox;
