import React from "react";
import ItemBox from "./ItemBox";
import Tree from "./Tree";


const EditPage = (repoNames, setRepoNames, commits, setCommits, token) => {
  return (
    <>
      <div>EditPage</div>
      <ItemBox />
      <Tree
        repoNames={repoNames}
        setRepoNames={setRepoNames}
        commits={commits}
        setCommits={setCommits}
        token={token}
      />
    </>
  );
};

export default EditPage;
