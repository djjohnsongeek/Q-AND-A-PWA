indexPage = {
    langSelect: null,
    questionHeader: null,
    questionCountHeader: null,
    answerContainer: null,
    navBtnsContainer: null,
    showAnswerBtn: null,
    nextBtn: null,
    prevBtn: null,
    state: {
        currentQIndex: 0,
        currentQLang: "",
    },
    init: function()
    {
        // Load HTML elements.
        indexPage.langSelect = document.getElementById("language-select");
        indexPage.questionHeader = document.getElementById("question-header");
        indexPage.questionCountHeader = document.getElementById("question-count");
        indexPage.answerContainer = document.getElementById("answer-container");
        indexPage.navBtnsContainer = document.getElementById("nav-buttons-container");
        indexPage.showAnswerBtn = document.getElementById("show-answer-btn");
        indexPage.nextBtn = document.getElementById("next-btn");
        indexPage.prevBtn = document.getElementById("prev-btn");

        indexPage.sanityCheck();

        // Load language options.
        for (let lang of QData.languages)
        {
            let option = document.createElement("option");
            let optionTextNode = document.createTextNode(lang);
            option.value = lang.toLocaleLowerCase();
            option.appendChild(optionTextNode);
            indexPage.langSelect.appendChild(option);
        }

        // Load question stats
        const questionCountTextNode = document.createTextNode(`There are ${QData.questions.length} Questions`);
        indexPage.questionCountHeader.innerHTML = "";
        indexPage.questionCountHeader.appendChild(questionCountTextNode);

        // Load default state.
        indexPage.state.currentQIndex = QData.minIndex;
        indexPage.state.currentQLang = QData.languages[0].toLowerCase();

        // Setup event listeners.
        indexPage.showAnswerBtn.addEventListener("click", (event) => {
            indexPage.revealAnswer(event);
        });

        indexPage.nextBtn.addEventListener("click", () => {
            indexPage.incrementQuestion(1);
        });

        indexPage.prevBtn.addEventListener("click", () => {
            indexPage.incrementQuestion(-1);
        });

        indexPage.langSelect.addEventListener("change", (event) => {
            indexPage.updateLanguage(event);
        });

        // Load the default question.
        indexPage.loadQuestion(indexPage.state.currentQIndex, indexPage.state.currentQLang);

    },
    revealAnswer: function(event) {
        event.currentTarget.style.display = "none";
        indexPage.answerContainer.style.display = "";
        indexPage.navBtnsContainer.style.display = "";
    },
    hideAnswer: function() {
        indexPage.answerContainer.style.display = "none";
        indexPage.navBtnsContainer.style.display = "none";
        indexPage.showAnswerBtn.style.display = "";
    },
    loadQuestion: function(qIndex, qlang)
    {
        const maxIndex = QData.questions.maxIndex();
        if (qIndex > maxIndex || qIndex < maxIndex)
        {
            alert("There are no more questions.");
            return;
        }

        indexPage.unloadQuestion();
        indexPage.hideActionBtns(qIndex);

        const questionText = document.createTextNode(QData.questions[qIndex][qlang].question);
        const answerText = document.createTextNode(QData.questions[qIndex][qlang].answer);
        const pageTitleText = document.createTextNode(`Q&A - ${QData.questions[qIndex][qlang].question}`);

        const pageTitle = document.getElementsByTagName("title")[0];
        pageTitle.innerText = "";

        pageTitle.appendChild(pageTitleText);
        indexPage.questionHeader.appendChild(questionText);
        indexPage.answerContainer.appendChild(answerText);

        indexPage.state.currentQIndex = qIndex;
    },
    unloadQuestion: function()
    {
        indexPage.hideAnswer();
        indexPage.questionHeader.innerHTML = "";
        indexPage.answerContainer.innerHTML = "";
    },
    incrementQuestion(incrementValue) {
        if (incrementValue !== 1 && incrementValue !== -1)
        {
            throw new Error(`Invalid incrementValue: ${incrementValue}. A '1' or an '-1' is expected.`);
        }

        const newQindex = indexPage.state.currentQIndex + incrementValue;
        const qLang = indexPage.state.currentQLang;
        indexPage.loadQuestion(newQindex, qLang);
    },
    updateLanguage: function(event) {
        indexPage.state.currentQLang = event.currentTarget.value;
        indexPage.loadQuestion(indexPage.state.currentQIndex, indexPage.state.currentQLang);
    },
    sanityCheck: function() {
        const requiredElements = [
            indexPage.langSelect,
            indexPage.questionHeader,
            indexPage.questionCountHeader,
            indexPage.answerContainer,
            indexPage.navBtnsContainer,
            indexPage.showAnswerBtn,
            indexPage.nextBtn,
            indexPage.prevBtn,
        ]
        
        if (requiredElements.includes(null))
        {
            throw new Error("Required elements are null!");
        }
    },
    hideActionBtns: function(currentQIndex)
    {
        if ((currentQIndex - 1) < QData.minIndex)
        {
            indexPage.setBtnDisabled(indexPage.prevBtn, true);
        }
        else {
            indexPage.setBtnDisabled(indexPage.prevBtn, false);
        }

        if ((currentQIndex + 1) > QData.maxIndex())
        {
            indexPage.setBtnDisabled(indexPage.nextBtn, true);
        }
        else {
            indexPage.setBtnDisabled(indexPage.nextBtn, false);
        }
    },
    setBtnDisabled: function(btnElement, value)
    {
        btnElement.disabled = value;
    }
}

indexPage.init();