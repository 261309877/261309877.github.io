var currentQ = new Object();
var currentA = "";
var random = 0;
var allQuestions = $.extend([], true, test);
var wrongQs = [];
var lineNumber = 0;

function initPage() {
    // showLineQ();
    showRandomQ()
    event();
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
        $(".question-box").html(currentQ["question"]);
    } else {
        $(".tips").html("答题结束");
    }

}

function event() {
    $(document).on("click", ".answer-box label", function () {
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
        if(allQuestions.length){
            setTimeout(function () {
                // showLineQ();
                showRandomQ();
                $(".tips").html("");
                $.each($(".answer-box input[type='radio']"), function (pro, item) {
                    $(item).removeAttr('checked');
                })
            }, 1500)
        }else{
            $(".answer-box").remove();
            $(".question-box").html("");
            $(".tips").html("答题结束, 共计错误"+wrongQs.length+"题");
        }
    })
}

initPage();