function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
window.addEventListener("load", async () => {
	await sleep(5000);
	let loader = document.querySelector(".loader");
	loader.className += " close";
	await sleep(5000);
	loader.remove();
})