import React from "react";
import "./Soucommit.css";
function Soucommit() {

  ////////////////////////////////メインツリーと同じ方法でコッミト数を表示する////////////////////////////////
  return (
    <>
      <p className="soucommit">
        今月の総コミット数『〇』 今週のコミット数『〇』(先週のコミット数『〇』)
        アイテム数『〇』
      </p>
    </>
  );
}

export default Soucommit;
