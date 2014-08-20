var ccm = {};
ccm.selenium2 = {};

ccm.selenium2.__stepData = {
  "SignIn.signIn":                   ["username", "password"],
  "CCMHome.clickGetStarted":         [],
  "SignOut.logOutFromCC":         []
};

ccm.selenium2.docs = {
  "SignIn.signIn": {
    "params": {
      "username": "CCM username",
      "password": "CCM password"
    },
    "packageName": "com.adobe.sst.ccm.flow",
    "description": "Signs in Creative Cloud from Global Nav."
  },
  "CCMHome.clickGetStarted": {
    "packageName": "com.adobe.sst.ccm.pages.global",
    "description": "Clicks 'Get started' in Creative Cloud home page."
  },
  "SignOut.logOutFromCC": {
    "packageName": "com.adobe.sst.ccm.flow",
    "description": "Sign out Creative Cloud from Global Nav."
  }
};

ccm.selenium2.__stepRecords = {
  "SignIn.signIn": [
    {
      "type": "clickElement",
      "locator": {
        "type": "css selector",
        "value": ".globalnav__js__menu-bar__item__signin"
      }
    },
    {
      "type": "setElementText",
      "locator": {
        "type": "id",
        "value": "username"
      },
      "text": "ccmqe@adobetest.com"
    },
    {
      "type": "setElementText",
      "locator": {
        "type": "id",
        "value": "password"
      },
      "text": "tester"
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "id",
        "value": "sign_in"
      }
    }    
  ],
  "CCMHome.clickGetStarted": [
    {
      "type": "clickElement",
      "locator": {
        "type": "css selector",
        "value": "a.dom-lobby--button"
      }
    }
  ],
  "SignOut.logOutFromCC": [
    {
      "type": "clickElement",
      "locator": {
        "type": "css selector",
        "value": "img.globalnav__icon--avatar"
      }
    },
    {
      "type": "clickElement",
      "locator": {
        "type": "css selector",
        "value": ".globalnav__profile__user-info__management__sign-out"
      }
    }    
  ]
};

ccm.selenium2.stepTypes = {};
for (var n in ccm.selenium2.__stepData) {
  ccm.selenium2.stepTypes[n] = new builder.selenium2.StepType(n, ccm.selenium2.docs[n].packageName);
}

ccm.selenium2.categories = [
  [_t('ccm_sel2_cat'), jQuery.map(ccm.selenium2.stepTypes, function(v) { return v; })]
];


// Extend builder objects
jQuery.extend(builder.selenium2.__stepData, ccm.selenium2.__stepData);
jQuery.extend(builder.selenium2.docs, ccm.selenium2.docs);
jQuery.extend(builder.selenium2.__stepRecords, ccm.selenium2.__stepRecords);
jQuery.extend(builder.selenium2.stepTypes, ccm.selenium2.stepTypes);
builder.selenium2.categories = builder.selenium2.categories.concat(ccm.selenium2.categories);

if (builder && builder.loader && builder.loader.loadNextMainScript) { builder.loader.loadNextMainScript(); }