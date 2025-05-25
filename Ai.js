async function generateCode() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");
  output.innerText = "Generating code...";

  const response = await fetch("https://api-inference.huggingface.co/models/bigcode/starcoder", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_HUGGINGFACE_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      inputs: prompt
    })
  });

  const data = await response.json();
  output.innerText = data?.generated_text || "Error generating code.";
}
