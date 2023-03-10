$(function () {
    let inputBox = document.getElementById("main-search");
    let searchResult = document.querySelector(".search-title");

    $(document).on("focus", "#main-search", function (e) {
        let inputBoxContainer = $(e.target);
        let text = inputBoxContainer.val().trim();
        if (text == "") {
            searchResult.style.display = "block";
        }

    })

    $(document).on("keyup", "#main-search", function (e) {
        let textbox = $(e.target);

        let search = textbox.val().trim();
        if (search != "") {
            $.post("http://127.0.0.1:8888/tweety/backend/ajax/search.php", { liveSearch: search }, function (data) {
                $(".search-result").html(data);
            });
        } else {
            $(".search-result").empty();
            //    $(".s-result-user").html("");
        }

    })
    $(document).on("mouseleave", "#main-search", function () {
        searchResult.style.display = "none";
    })
})