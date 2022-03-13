import './style.css'

const onClickAdd = () => {
  const text = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  addIncompleteList(text);
}

//未完了リストから削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
}

//未完了リストに追加
const addIncompleteList = (text) => {
  const incompleteList = document.getElementById("incomplete-list");
  const completeList = document.getElementById("complete-list");

  //li生成
  const li = document.createElement("li");
  li.className = "list-row";
  const span = document.createElement("span");
  span.className = "title";
  span.innerText = text
  li.appendChild(span);

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了"
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    const addTargetText = addTarget.getElementsByClassName("title")[0].innerText;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "title";
    span.innerText = addTargetText;
    li.appendChild(span);
    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click",()=>{
      const backTarget = backButton.parentNode;
      const backTargetText = backTarget.getElementsByClassName("title")[0].innerText;
      addIncompleteList(text);
      completeList.removeChild(backTarget);
    });

    li.appendChild(backButton);
    completeList.appendChild(li);

    deleteFromIncompleteList(addTarget);

  })
  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  })

  //liにボタン追加
  li.appendChild(completeButton)
  li.appendChild(deleteButton);

  //リストにli追加
  incompleteList.appendChild(li);
}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());