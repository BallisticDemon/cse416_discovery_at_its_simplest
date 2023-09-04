const geographical_file = document.querySelector("#geographical-file")
var uploaded_file = "";

geographical_file.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_file = reader.result;
        document.querySelector("#map").getSource('usa-states').setData(uploaded_file);
    })
    reader.readAsDataURL(this.files[0]);
})