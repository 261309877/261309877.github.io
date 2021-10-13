var allQuestions = $.extend([], true, test);

function selfEvent() {
    $(document).on('click', ".check-btn", function () {
        let keyword = $(".id-card").val();
        if (keyword) {
            let relativeQ = allQuestions.filter(item => {
                return item.question.indexOf(keyword) >= 0
            })
            let html = '';
            relativeQ.forEach(element => {
                html += element.question;
                html += '<br>';
                html += '答案：';
                html += element.answer;
                html += '<br>';
            });
            $(".question-box-content .question-box").html(html)
        } else { $(".question-box-content .question-box").html('') }
    })
}
selfEvent();