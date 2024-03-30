export default function textAreaSizeDinamic(comments) {
  const $sizeTextArea = document.getElementById(comments);

  $sizeTextArea.addEventListener("keyup", (e) => {
    $sizeTextArea.style.height = "auto";

    let sizeTextArea = e.target.scrollHeight;

    $sizeTextArea.style.height = `${sizeTextArea}px`;
  });
}