indexPage = {
    langSelect: null,
    questionHeader: null,
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
        // load doc elements
        indexPage.langSelect = document.getElementById("language-select");
        indexPage.questionHeader = document.getElementById("question-header");
        indexPage.answerContainer = document.getElementById("answer-container");
        indexPage.navBtnsContainer = document.getElementById("nav-buttons-container");
        indexPage.showAnswerBtn = document.getElementById("show-answer-btn");
        indexPage.nextBtn = document.getElementById("next-btn");
        indexPage.prevBtn = document.getElementById("prev-btn");

        indexPage.sanityCheck();

        // Load language options
        for (let lang of QData.languages)
        {
            let option = document.createElement("option");
            let optionTextNode = document.createTextNode(lang);
            option.value = lang.toLocaleLowerCase();
            option.appendChild(optionTextNode);
            indexPage.langSelect.appendChild(option);
        }

        // Load default state
        indexPage.state.currentQIndex = QData.minIndex;
        indexPage.state.currentQLang = QData.languages[0].toLowerCase();


        // Setup event listeners
        indexPage.showAnswerBtn.addEventListener("click", (event) => {
            indexPage.revealAnswer(event);
        });

        indexPage.nextBtn.addEventListener("click", () => {
            indexPage.nextBtnAction();
        });

        indexPage.prevBtn.addEventListener("click", () => {
            indexPage.prevBtnAction();
        });

        indexPage.langSelect.addEventListener("change", (event) => {
            indexPage.updateLanguage(event);
        });

        // Load the default question
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
        console.log(qIndex, qlang);
        indexPage.unloadQuesstion();

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
    unloadQuesstion: function()
    {
        indexPage.questionHeader.innerHTML = "";
        indexPage.answerContainer.innerHTML = "";
    },
    nextBtnAction: function()
    {
        const qIndex = indexPage.state.currentQIndex + 1;
        const qLang = indexPage.state.currentQLang;
        indexPage.hideAnswer();
        indexPage.loadQuestion(qIndex, qLang);
    },
    prevBtnAction: function()
    {
        const qIndex = indexPage.state.currentQIndex - 1;
        const qLang = indexPage.state.currentQLang;
        indexPage.hideAnswer();
        indexPage.loadQuestion(qIndex, qLang);
    },
    updateLanguage: function(event) {
        indexPage.state.currentQLang = event.currentTarget.value;
        indexPage.loadQuestion(indexPage.state.currentQIndex, indexPage.state.currentQLang);
    },
    sanityCheck: function() {
        const requiredElements = [
            indexPage.langSelect,
            indexPage.questionHeader,
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
    }
}

indexPage.init();