var currentQ = new Object();
var currentA = "";
var random = 0;
var allQuestions = $.extend([], true, test);
var wrongQs = [];
var lineNumber = 0;

var existIdCards= [
    "ctsi@123"
]

function initPage() {
    // showLineQ();
    showRandomQ()
}

function showLineQ() {
    currentQ = allQuestions[lineNumber];
    currentA = currentQ["answer"]
    $(".question-box").html(currentQ["question"]);
    lineNumber++;
}

function showRandomQ() {
    if (allQuestions.length) {
        random = parseInt(Math.random() * allQuestions.length);
        currentQ = allQuestions[random];
        currentA = currentQ["answer"];
        currentQType = currentQ["type"]
        $(".question-box").html(currentQ["question"]);
        if (currentQType && currentQType == "checkbox") {
            $(".radio-answer-box").hide();
            $(".checkbox-answer-box").show()
        } else {
            $(".radio-answer-box").show();
            $(".checkbox-answer-box").hide()
        }
    } else {
        $(".tips").html("答题结束");
    }

}

function addEvent() {
    $(document).on("click", ".radio-answer-box label", function () {
        var seletValue = $(this).find("input").val();
        if (seletValue == currentA) {
            allQuestions.splice(random, 1);
            $(".tips").html("回答正确！");
        } else {
            wrongQs.push(currentQ);
            allQuestions.push(currentQ);
            $(".tips").html("正确答案：" + currentA);
            console.log(allQuestions);
        }
        if (allQuestions.length) {
            setTimeout(function () {
                // showLineQ();
                showRandomQ();
                $(".tips").html("");
                $.each($(".radio-answer-box input[type='radio']"), function (pro, item) {
                    $(item).removeAttr('checked');
                })
            }, 1500)
        } else {
            $(".answer-box").remove();
            $(".question-box").html("");
            $(".tips").html("答题结束, 共计错误" + wrongQs.length + "题");
        }
    })

    $(document).on("click", ".checkbox-answer-box .make-sure-btn", function () {
        var checkboxValue = [];
        var seletOptions = $(".checkbox-answer-box input[type='checkbox']:checked");
        seletOptions.each(function () {
            let tempVal = $(this).val();
            checkboxValue.push(tempVal);
        })

        if (JSON.stringify(checkboxValue) == JSON.stringify(currentA)) {
            allQuestions.splice(random, 1);
            $(".tips").html("回答正确！");
        } else {
            wrongQs.push(currentQ);
            allQuestions.push(currentQ);
            $(".tips").html("正确答案：" + currentA.toString());
            console.log(allQuestions);
        }
        if (allQuestions.length) {
            setTimeout(function () {
                // showLineQ();
                showRandomQ();
                $(".tips").html("");
                $.each($(".checkbox-answer-box input[type='checkbox']"), function (pro, item) {
                    $(item).removeAttr('checked');
                })
            }, 1500)
        } else {
            $(".answer-box").remove();
            $(".question-box").html("");
            $(".tips").html("答题结束, 共计错误" + wrongQs.length + "题");
        }
    })

    $(document).on("click", ".check-box .check-btn", function(){
        let checkVal = $(".id-card").val();
        if(existIdCards.includes(checkVal)){
            $(".question-box-content").show();
            $(".check-box").hide();
            initPage();
        }
    })
}

addEvent();