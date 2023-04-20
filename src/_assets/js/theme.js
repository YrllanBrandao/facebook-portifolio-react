const setTheme = (theme='darkMode') =>{

    const darkMode = {
        background: "#18191a",
        borderImageProfile: "#242526",
        profileNameColor: "#e4e6eb",
        headerColor: "#242526",
        borderBottom: "#3e3f41",
        introTitle:"#e1e3e8" ,
        introText:"#e4e6eb" ,
        postText:  "#e4e6eb",
        postDate: "#a1a3a7",
        skillTagBg: "#242526",
        skillTagBorder: "#3e3f41",
        skillTagText: "#e4e6eb",
        skillTagHover: "#3a3b3c",
        // about
        aboutButtonBgActive: "#263951",
        aboutButtonBgHover: "#505151",
        aboutButtonBgActiveText: "#2762e3",
        aboutButtonBgActiveHover: "#e4e6eb",
        aboutTitle: "#e4e6eb",
        aboutButtonText: "#abb3b8",
        aboutInfoText:"#b0b3b8",
        // sub list
        subListColor: "#e4e6eb",
        subListLink: "#e4e6eb",
        // buttons
        btnResumeBg: "#3a3b3c",
        btnResumeBgHover: "#4b4c4f",
        btnResumeText: "#e4e6ea",
        btnMessageFloat: "#4b4c4f",
        btnMessageFloatText: "#e4e6ea",
        btnSectionHover: "#3a3b3c",
        //links
        linkColor: "",
         // message 
         formMessageBg: "#242526",
         formControlBg: "#3a3b3c",
         formMessageColor: "#a9af9c",
         formMessagePlaceholder: "#b9bcc0",
         pseudoElementBg: "#fff",
         pseudoElementText: "#000"
    }
    const lightMode  = {
        background: "#f0f2f5",
        borderImageProfile: "#fff",
        profileNameColor: "#2d0905",
        headerColor: "#ffffff",
        borderBottom: "#ccced2",
        introTitle: "#050505",
        introText: "#050505",
        postText: "#050505",
        postDate: "#85878a",
        skillTagBg: "#fff",
        skillTagBorder: "#ccced2",
        skillTagText: "#050505",
        skillTagHover: "#e4e6eb",
        // about
        aboutTitle: "#050505",
        aboutButtonBgActive: "#e7f3ff",
        aboutButtonBgHover: "#e4e6eb",
        aboutButtonBgActiveText: "#1876f2",
        aboutButtonBgActiveHover: "#e4e6eb",
        aboutButtonText: "#656e87",
        aboutInfoText: "#727b87",
        // sub list
        subListColor: "#050505",
        subListLink: "#0d1115",
        // buttons
        btnResumeBg: "#e4e6eb",
        btnResumeBgHover: "#d6d8db",
        btnResumeText: "#1d1f23",
        btnMessageFloat: "#ffffff",
        btnMessageFloatHover: "#FcFcFc",
        btnMessageFloatText: "#1d1f23",
        btnSectionHover: "#e4e6eb",
        // links
        linkColor: "#3079dd",
        AboutSocialLink: "#0d1525",
        // message 
        formMessageBg: "#fff",
        formControlBg: "#f0f2f5",
        formMessageColor: "#050505",
        formMessagePlaceholder: "#818387",
        pseudoElementBg: "#18191a",
        pseudoElementText: "#fafafa"
    }
    const themes ={
        lightMode,
        darkMode
    }


    const applyTheme = (theme) =>{
        document.documentElement.style.setProperty("--body-color", theme.background);
        document.documentElement.style.setProperty("--header-color", theme.headerColor);
        document.documentElement.style.setProperty("--border-bottom", theme.borderBottom);
        document.documentElement.style.setProperty("--border-image-profile", theme.borderImageProfile);
        document.documentElement.style.setProperty("--profile-name-color", theme.profileNameColor);
        document.documentElement.style.setProperty("--post-text-color", theme.postText);
        document.documentElement.style.setProperty("--intro-title", theme.introTitle);
        document.documentElement.style.setProperty("--intro-text", theme.introText);
        document.documentElement.style.setProperty("--btn-resume-bg", theme.btnResumeBg);
        document.documentElement.style.setProperty("--btn-resume-text", theme.btnResumeText);
        document.documentElement.style.setProperty("--btn-resume-bg-hover", theme.btnResumeBgHover);
        document.documentElement.style.setProperty("--post-date-color", theme.postDate);
        document.documentElement.style.setProperty("--about-title", theme.aboutTitle);
        document.documentElement.style.setProperty("--about-button-text", theme.aboutButtonText);
        document.documentElement.style.setProperty("--about-button-bg-active", theme.aboutButtonBgActive);
        document.documentElement.style.setProperty("--about-button-bg-hover", theme.aboutButtonBgHover);
        document.documentElement.style.setProperty("--about-button-bg-active-hover", theme.aboutButtonBgActiveHover);
        document.documentElement.style.setProperty("--about-button-bg-active-text", theme.aboutButtonBgActiveText);
        document.documentElement.style.setProperty("--about-info-text", theme.aboutInfoText);
        document.documentElement.style.setProperty("--about-social-link", theme.AboutSocialLink);
        document.documentElement.style.setProperty("--about-sub-list-color", theme.subListColor);
        document.documentElement.style.setProperty("--about-sub-list-link", theme.subListLink);
        document.documentElement.style.setProperty("--button-message-float", theme.btnMessageFloat);
        document.documentElement.style.setProperty("--button-message-float-hover", theme.btnMessageFloatHover);
        document.documentElement.style.setProperty("--button-message-float-text", theme.btnMessageFloatText);
        document.documentElement.style.setProperty("--btn-section-hover", theme.btnSectionHover);
        

        // 
        document.documentElement.style.setProperty("--skill-tag-bg", theme.skillTagBg);
        document.documentElement.style.setProperty("--skill-tag-border", theme.skillTagBorder);
        document.documentElement.style.setProperty("--skill-tag-Text", theme.skillTagText);
        document.documentElement.style.setProperty("--skill-tag-hover", theme.skillTagHover);

        // form message
        document.documentElement.style.setProperty("--form-message-bg", theme.formMessageBg);
        document.documentElement.style.setProperty("--form-control-bg", theme.formControlBg);
        document.documentElement.style.setProperty("--form-message-text", theme.formMessageColor);
        document.documentElement.style.setProperty("--form-control-placeholder", theme.formMessagePlaceholder);
        document.documentElement.style.setProperty("--pseudo-element-bg", theme.pseudoElementBg);
        document.documentElement.style.setProperty("--pseudo-element-text", theme.pseudoElementText);
    } 


    switch(theme)
    {
        case 'darkMode':
        applyTheme(themes.darkMode);
        break;

        case 'lightMode':
        applyTheme(themes.lightMode);
        break;
    }


}


export default setTheme;