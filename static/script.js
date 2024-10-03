/*------------------------------------- Dictionaries -------------------------------------*/
// JavaScript object to store translations
const translations = {
  jp: {
      // All Pages
      home: "ホーム",
      about: "履歴",
      portfolio: "ポートフォリオ",
      contact: "お問合せ",

      // Home Page
      profession: "データサイエンティスト",
      home_description: "気象学と人材管理の経験を持つ、熱心で意欲的なデータ サイエンティスト。",

      // About Page
      about_me: "履歴",
      about_description: "気象学と人材管理の経験を持つ、熱心で意欲的なデータ サイエンティスト。",
      tools: "道具",
      skills: "技能",
      education: "学歴",
      skills_1: "データ解析",
      skills_2: "機械学習エンジニアリング",
      skills_3: "展開",
      skills_1_text: "ETL - 統計分析 - 意思決定",
      skills_2_text: "機械学習 - ディープラーニング - NLP - 生成AI",
      skills_3_text: "開発 - ダッシュボード - 展開",
      education_1: "Le wagon - ２０２３年９月",
      education_2: "Code Chrysalis - ２０２３年４月",
      education_3: "サン・パウロ大学 - ２０１１年１２月",
      education_1_text: "データサイエンスコース",
      education_2_text: "ソフトウェアエンジニアファウンデーションズコース",
      education_3_text: "大気化学の理学士",

      // Portfolio Page
      portfolio_me: "ポートフォリオ",
      major: "主要なプロジェクト",
      minor: "他のプロジェクト",
      major_project_1: "Olist Eコマース",
      major_project_2: "AIdentikitアプリ",
      major_project_3: "ニューヨークタクシー運賃予測",
      major_project_4: "福井観光",
      major_project_1_text: "2016年から2018年にかけてブラジルのさまざまなマーケットプレイスで行われた100,000の注文を分析します。",
      major_project_2_text: "ユーザーが提供するテキスト情報に基づいて人の顔の画像を生成し、世界の有名人の約200Kの顔画像を含むCelebAデータセットを使用します。",
      major_project_3_text: "2点間のタクシー運賃の最終価格を予測します。",
      major_project_4_text: "県内の観光サービスの向上や商品開発、観光施策の推進を図る。これを活用することで観光客の満足度を高め、福井県のファンやリピーターを増やし、観光消費額の増加につなげたいと考えています。",
      minor_project_1: "多言語個人ウェブサイト",
      minor_project_2: "数独ソルバー",
      minor_project_3: "数独バリデーター",
      minor_project_4: "プロジェクト 4",
      minor_project_1_text: "Python（Flask）、HTML、CSS、JavaScriptを使用して構築された個人ポートフォリオウェブサイト。多言語サポート、機能的な連絡先フォーム、さまざまな画面サイズに対応したレスポンシブデザインが特徴です。",
      minor_project_2_text: "このプロジェクトの目的は、数独ゲームを解く関数を作成することです。",
      minor_project_3_text: "このプロジェクトの目的は、与えられた数独の表が有効かどうかを確認する関数を作成することです。",
      minor_project_4_text: "プロジェクト 4 Description.",
      check_out: "他のプロジェクトはこちらをご覧ください ->",

      // Contact Page
      contact_me: 'お問合せ',
      name: '名前',
      email: 'メールアドレス',
      subject: '件名',
      form_text_area: 'Your message',
      submit: '送信'
  },
  pt: {
      // All Pages
      home: "Início",
      about: "Sobre",
      portfolio: "Portifolio",
      contact: "Contato",

      // Home Page
      profession: "Cientista de Dados",
      home_description: "Cientista de dados dedicado e motivado, com experiência em meteorologia e gestão de pessoas.",

      // About Page
      about_me: "Sobre mim",
      about_description: "Cientista de dados dedicado e motivado, com experiência em meteorologia e gestão de pessoas.",
      tools: "Tools",
      skills: "Skills",
      education: "Educação",
      skills_1: "Análise de Dados",
      skills_2: "Aprendizado de Máquina",
      skills_3: "Implementação",
      skills_1_text: "ETL - Análise Estatística - Tomada de Decisão",
      skills_2_text: "Machine Learning - Deep Learning - NLP - IA Genrativa",
      skills_3_text: "Desenvolvimento - Dashboard - Implementação",
      education_1: "Le Wagon - Set 2023",
      education_2: "Code Chrysalis - Abr 2023",
      education_3: "Universidade de São Paulo - DEC 2011",
      education_1_text: "Ciências de Dados",
      education_2_text: "Fundamentos de Engenharia de Software",
      education_3_text: "Bacharelado em Ciências Atmosféricas",

      // Portfolio Page
      portfolio_me: "Portifolio",
      major: "Principais projetos",
      minor: "Outros projetos",
      major_project_1: "Olist Ecommerce",
      major_project_2: "AIdentikit App",
      major_project_3: "Previsão da Tarifa de Táxi de Nova York",
      major_project_4: "Turismo em Fukui",
      major_project_1_text: "Analisar os 100.000 pedidos fornecidos pela Olist, realizados entre 2016 e 2018 em vários marketplaces no Brasil.",
      major_project_2_text: "Gerar imagens de rostos de pessoas com base em informações textuais fornecidas pelo usuário e usando o conjunto de dados CelebA que contém cerca de 200 mil imagens de rostos de celebridades do mundo.",
      major_project_3_text: "Prever o preço final da tarifa de táxi entre 2 pontos.",
      major_project_4_text: "Melhorar os serviços turísticos na província, desenvolver produtos e promover medidas turísticas. Ao aproveitar isso, esperamos aumentar a satisfação dos turistas, aumentar o número de fãs e visitantes recorrentes da província de Fukui e levar a um aumento nos gastos com turismo.",
      minor_project_1: "Site Pessoal Multilíngue",
      minor_project_2: "Sudoku Solver",
      minor_project_3: "Sudoku Validator",
      minor_project_4: "Projeto 4",
      minor_project_1_text: "Um site de portfólio pessoal construído usando Python (Flask), HTML, CSS e JavaScript. Apresenta suporte multilíngue, um formulário de contato funcional e design responsivo para diversos tamanhos de tela.",
      minor_project_2_text: "O objetivo deste projeto é criar uma função para resolver um jogo de sudoku.",
      minor_project_3_text: "O objetivo deste projeto é criar uma função para validar se uma tabela de sudoku fornecida é válida.",
      minor_project_4_text: "Projeto 4 Description.",
      check_out: "Confira meus outros projetos aqui ->",

      // Contact Page
      contact_me: 'Contate-me',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      form_text_area: 'Mensagem',
      submit: 'Enviar'

  }
};
// Font sizes and families for each language to make text fit in the same space
const styles = {
  en: {
      '--font-family': 'Source Code Pro',

      // navbar
      '--fs-nav-1': '1.7rem',
      '--fs-nav-2': '2.5rem',
      '--fs-nav-3': '3.6rem',

      // h tags
      '--fs-h0': '4.0rem',
      '--fs-h1': '4.0rem',
      '--fs-h2': '3.0rem',
      '--fs-h3': '2.5rem',
      '--fs-h4': '1.5rem',

      // icons and language buttons
      '--fs-lan': '1.25rem',
      '--fs-icon': '1.9rem',

      // p tags
      '--fs-p0': '1.0rem',
      '--fs-p1': '1.3rem',
      '--fs-p2': '1.5rem',
      '--fs-p3': '1.9rem',
      '--fs-p4': '2.1rem',
      '--fs-p5': '2.4rem',
      '--fs-p6': '2.8rem',
      '--fs-p7': '3.0rem',
      '--fs-p8': '3.2rem'

  },
  jp: {
      '--font-family': 'Noto Serif JP',

      // navbar
      '--fs-nav-1': '1.7rem',
      '--fs-nav-2': '2.5rem',
      '--fs-nav-3': '3.6rem',

      // h tags
      '--fs-h0': '4.0rem',
      '--fs-h1': '2.95rem',
      '--fs-h2': '2.2rem',
      '--fs-h3': '2.0rem',
      '--fs-h4': '1.5rem',

      // icons and language buttons
      '--fs-lan': '1.25rem',
      '--fs-icon': '1.9rem',

      // p tags
      '--fs-p0': '1.0rem',
      '--fs-p1': '1.3rem',
      '--fs-p2': '1.5rem',
      '--fs-p3': '1.9rem',
      '--fs-p4': '2.1rem',
      '--fs-p5': '2.4rem',
      '--fs-p6': '2.8rem',
      '--fs-p7': '3.0rem',
      '--fs-p8': '3.2rem'
  },
  pt: {
      '--font-family': 'Source Code Pro',

      // navbar
      '--fs-nav-1': '1.7rem',
      '--fs-nav-2': '2.5rem',
      '--fs-nav-3': '3.6rem',

      // h tags
      '--fs-h0': '4.0rem',
      '--fs-h1': '4.0rem',
      '--fs-h2': '3.0rem',
      '--fs-h3': '2.5rem',
      '--fs-h4': '1.5rem',

      // icons and language buttons
      '--fs-lan': '1.25rem',
      '--fs-icon': '1.9rem',

      // p tags
      '--fs-p0': '1.0rem',
      '--fs-p1': '1.3rem',
      '--fs-p2': '1.5rem',
      '--fs-p3': '1.9rem',
      '--fs-p4': '2.1rem',
      '--fs-p5': '2.4rem',
      '--fs-p6': '2.8rem',
      '--fs-p7': '3.0rem',
      '--fs-p8': '3.2rem'
  }
};
/*------------------------------------- Dictionaries -------------------------------------*/
/*------------------------------------- About/Portfolio Page -------------------------------------*/
// Get all elements with class 'tab_links'
let tablinks = document.getElementsByClassName('tab_links');
// Get all elements with class 'tab_content'
let tabcontents = document.getElementsByClassName('tab_content');
// // Function that opens a tab with the given name
function opentab(tabname){
    // Remove the 'active_link' class from all 'tab_links'
    for(tablink of tablinks){
        tablink.classList.remove('active_link');
    }

    // Remove the 'active_tab' class from all 'tab_content'
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active_tab');
    }

    // Add the 'active_link' class to the clicked 'tab_link'
    event.currentTarget.classList.add('active_link');

    // Add the 'active_tab' class to the content element with the given 'tabname'
    document.getElementById(tabname).classList.add('active_tab');
}
/*------------------------------------- About/Portfolio Page -------------------------------------*/
/*------------------------------------- Contact Page -------------------------------------*/


/*------------------------------------- Contact Page -------------------------------------*/

/*--------------------------------------------------------- All Pages ---------------------------------------------------------*/
/*------------------------------------- Menu Icon -------------------------------------*/
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
/*------------------------------------- Menu Icon -------------------------------------*/
/*------------------------------------- Language Buttons -------------------------------------*/
// Function to apply the language changes to the page
function applyLanguage(language) {
    document.querySelectorAll('.translatable').forEach(element => {
        const key = element.getAttribute('data-key');
        if (language === 'en') {
            element.textContent = element.getAttribute('data-original-text');
        } else if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Update button styles
    document.querySelectorAll('.language-buttons .button').forEach(button => {
        button.classList.remove('active');});
    document.querySelector(`.language-buttons .button[data-lang="${language}"]`).classList.add('active');
}

// Function to change the language
function changeLanguage(language) {
    localStorage.setItem('selectedLanguage', language);
    applyLanguage(language);

    // Update CSS variables
    const root = document.documentElement;
    const languageStyles = styles[language];
    for (let property in languageStyles) {
      root.style.setProperty(property, languageStyles[property]);
    }
}
// Apply the saved language as soon as possible
document.addEventListener('DOMContentLoaded', () => {
    // Store original text in data attributes
    document.querySelectorAll('.translatable').forEach(element => {
        if (!element.hasAttribute('data-original-text')) {
            element.setAttribute('data-original-text', element.textContent);
        }
    });
    // Apply saved language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    applyLanguage(savedLanguage);

    // Event listeners to language buttons
    document.querySelectorAll('.language-buttons .button').forEach(button => {
        button.addEventListener('click', () => {
            const language = button.getAttribute('data-lang');
            changeLanguage(language);
        });
    });
});
/*------------------------------------- Language Buttons -------------------------------------*/
/*--------------------------------------------------------- All Pages ---------------------------------------------------------*/
