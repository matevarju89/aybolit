import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';

import '@conversionxl/cxl-institute';

storiesOf('Layouts', module)
  .addDecorator(withKnobs)
  .add('cxl-institute-layout', () => {
    return html`
      <cxl-institute-layout>
        <nav class="icon-nav" slot="icon-nav">
          <a href="/">
            <div class="logo">
              <span class="cxl">C<span>XL</span></span>
            </div>
          </a>
          <div class="icon-nav__top-nav">
            <ul class="icon-nav__nav-items">
              <li class="icon-nav__item">
                <a href="trainings" class="icon-nav__item-active">
                  <iron-icon class="icon size-l" icon="cxl:nav-trainings"></iron-icon>
                  <iron-icon class="icon size-l" icon="cxl:nav-trainings-active"></iron-icon>
                  <span class="mobile-text">Trainings</span>
                </a>
              </li>
              <li class="icon-nav__item">
                <a href="roadmap">
                  <iron-icon class="icon size-l" icon="cxl:nav-roadmap"></iron-icon>
                  <iron-icon class="icon size-l" icon="cxl:nav-roadmap-active"></iron-icon>
                  <span class="mobile-text">Discover</span>
                </a>
              </li>
              <li class="icon-nav__item">
                <a href="discover">
                  <iron-icon class="icon size-l" icon="cxl:nav-discover"></iron-icon>
                  <iron-icon class="icon size-l" icon="cxl:nav-discover-active"></iron-icon>
                  <span class="mobile-text">Manage</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="icon-nav__bottom-nav">
            <ul class="icon-nav__nav-items">
              <li class="icon-nav__item">
                <a href="/">
                  <iron-icon class="icon size-l" icon="lumo:user"></iron-icon>
                  <span class="mobile-text">Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <!-- Sidebar -->
        <h3 slot="sidebar-header">Training Manager</h3>
        <div class="sidebar-content" slot="sidebar-content">
          <strong class="extra-heading">Digital analytics minidegree program</strong>
          <vaadin-details theme="cxl-sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
          <vaadin-details theme="cxl-sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
        </div>

        <!-- Content -->
        <cxl-institute-content>
          <cxl-institute-content-header with-button slot="content-header">
            Course
            <vaadin-button theme="primary" slot="header-button">
              Optional button
            </vaadin-button>
          </cxl-institute-content-header>

          <h2>Betrayed cheerful declared end and</h2>

          <p>
            Certainty listening no no behaviour existence assurance situation is. Because add why
            not esteems amiable him. Interested the unaffected mrs law friendship add principles.
            Indeed on people do merits to. Court heard which up above hoped grave do. Answer living
            law things either sir bed length. Looked before we an on merely. These no death he at
            share alone. Yet outward the him compass hearted are tedious.
          </p>

          <p>
            Written enquire painful ye to offices forming it. Then so does over sent dull on.
            Likewise offended humoured mrs fat trifling answered. On ye position greatest so
            desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush
            songs begin. Nor but mean time one over.
          </p>

          <p>
            Savings her pleased are several started females met. Short her not among being any.
            Thing of judge fruit charm views do. Miles mr an forty along as he. She education get
            middleton day agreement performed preserved unwilling. Do however as pleased offence
            outward beloved by present. By outward neither he so covered amiable greater. Juvenile
            proposal betrayed he an informed weddings followed. Precaution day see imprudence
            sympathize principles. At full leaf give quit to in they up.
          </p>

          <p>
            Situation admitting promotion at or to perceived be. Mr acuteness we as estimable
            enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton
            suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber
            pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe
            service arrived civilly add all. Acuteness allowance an at eagerness favourite in
            extensive exquisite ye.
          </p>

          <p>
            In to am attended desirous raptures declared diverted confined at. Collected instantly
            remaining up certainly to necessary as. Over walk dull into son boy door went new. At or
            happiness commanded daughters as. Is handsome an declared at received in extended
            vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat
            case left use. Match round scale now sex style far times. Your me past an much.
          </p>

          <p>
            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now
            easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may
            purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He
            less do quit evil is. Add matter family active mutual put wishes happen.
          </p>
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  })
  .add('cxl-institute-layout-nav', () => {
    return html`
      <cxl-institute-layout>
        <nav class="menu menu--institute-icon-nav" slot="icon-nav">
          <h3 class="menu__title screen-reader-text">cxl-2019/institute-icon-nav</h3>

          <ul class="menu__items">
            <li id="menu-item-1031803" class="menu__item has-children ">
              <a href="#" class="menu__link">TOP</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1031802" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/practitioners/" class="menu__link"
                    ><strong>C<em>XL</em></strong></a
                  >
                </li>
                <li id="menu-item-1031801" class="menu__item ">
                  <a class="menu__link">cxl:nav-trainings</a>
                </li>
                <li id="menu-item-1031804" class="menu__item ">
                  <a class="menu__link">cxl:nav-roadmap</a>
                </li>
                <li id="menu-item-1031805" class="menu__item ">
                  <a href="#" class="menu__link">cxl:nav-discover</a>
                </li>
              </ul>
            </li>
            <li id="menu-item-1031806" class="menu__item has-children ">
              <a class="menu__link">BOTTOM</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1031808" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/my-account/" class="menu__link"
                    >lumo:user</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- Sidebar -->
        <h3 slot="sidebar-header">Training Manager</h3>
        <div class="sidebar-content" slot="sidebar-content">
          <strong class="extra-heading">Digital analytics minidegree program</strong>
          <vaadin-details theme="cxl-sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
          <vaadin-details theme="cxl-sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
        </div>

        <!-- Content -->
        <cxl-institute-content>
          <cxl-institute-content-header with-button slot="content-header">
            Course
            <vaadin-button theme="primary" slot="header-button">
              Optional button
            </vaadin-button>
          </cxl-institute-content-header>

          <div class="embed-container" slot="content-video">
            <iframe
              src="https://player.vimeo.com/video/321840987"
              height="400"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            ></iframe>
          </div>

          <h2>Betrayed cheerful declared end and</h2>

          <p>
            Certainty listening no no behaviour existence assurance situation is. Because add why
            not esteems amiable him. Interested the unaffected mrs law friendship add principles.
            Indeed on people do merits to. Court heard which up above hoped grave do. Answer living
            law things either sir bed length. Looked before we an on merely. These no death he at
            share alone. Yet outward the him compass hearted are tedious.
          </p>

          <p>
            Written enquire painful ye to offices forming it. Then so does over sent dull on.
            Likewise offended humoured mrs fat trifling answered. On ye position greatest so
            desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush
            songs begin. Nor but mean time one over.
          </p>

          <p>
            Savings her pleased are several started females met. Short her not among being any.
            Thing of judge fruit charm views do. Miles mr an forty along as he. She education get
            middleton day agreement performed preserved unwilling. Do however as pleased offence
            outward beloved by present. By outward neither he so covered amiable greater. Juvenile
            proposal betrayed he an informed weddings followed. Precaution day see imprudence
            sympathize principles. At full leaf give quit to in they up.
          </p>

          <p>
            Situation admitting promotion at or to perceived be. Mr acuteness we as estimable
            enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton
            suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber
            pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe
            service arrived civilly add all. Acuteness allowance an at eagerness favourite in
            extensive exquisite ye.
          </p>

          <p>
            In to am attended desirous raptures declared diverted confined at. Collected instantly
            remaining up certainly to necessary as. Over walk dull into son boy door went new. At or
            happiness commanded daughters as. Is handsome an declared at received in extended
            vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat
            case left use. Match round scale now sex style far times. Your me past an much.
          </p>

          <p>
            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now
            easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may
            purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He
            less do quit evil is. Add matter family active mutual put wishes happen.
          </p>
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  })
  .add('cxl-institute-layout-nav', () => {
    return html`
      <cxl-institute-layout>
        <nav class="menu menu--institute-icon-nav" slot="icon-nav">
          <h3 class="menu__title screen-reader-text">cxl-2019/institute-icon-nav</h3>

          <ul class="menu__items">
            <li id="menu-item-1031803" class="menu__item has-children ">
              <a href="#" class="menu__link">TOP</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1031802" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/practitioners/" class="menu__link"
                    ><strong>C<em>XL</em></strong></a
                  >
                </li>
                <li id="menu-item-1031801" class="menu__item ">
                  <a class="menu__link">cxl:nav-trainings</a>
                </li>
                <li id="menu-item-1031804" class="menu__item ">
                  <a class="menu__link">cxl:nav-roadmap</a>
                </li>
                <li id="menu-item-1031805" class="menu__item ">
                  <a href="#" class="menu__link">cxl:nav-discover</a>
                </li>
              </ul>
            </li>
            <li id="menu-item-1031806" class="menu__item has-children ">
              <a class="menu__link">BOTTOM</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1031808" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/my-account/" class="menu__link"
                    >lumo:user</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- Sidebar -->
        <h3 slot="sidebar-header">Training Manager</h3>
        <div class="sidebar-content" slot="sidebar-content">
          <strong class="extra-heading">Digital analytics minidegree program</strong>
          <vaadin-details theme="cxl-sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
          <vaadin-details theme="cxl-sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
        </div>

        <!-- Content -->
        <cxl-institute-content>
          <cxl-institute-content-header with-button slot="content-header">
            Course
            <vaadin-button theme="primary main-button" slot="header-button">
              Optional button
            </vaadin-button>
          </cxl-institute-content-header>

          <h2>Betrayed cheerful declared end and</h2>

          <p>
            Certainty listening no no behaviour existence assurance situation is. Because add why
            not esteems amiable him. Interested the unaffected mrs law friendship add principles.
            Indeed on people do merits to. Court heard which up above hoped grave do. Answer living
            law things either sir bed length. Looked before we an on merely. These no death he at
            share alone. Yet outward the him compass hearted are tedious.
          </p>

          <p>
            Written enquire painful ye to offices forming it. Then so does over sent dull on.
            Likewise offended humoured mrs fat trifling answered. On ye position greatest so
            desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush
            songs begin. Nor but mean time one over.
          </p>

          <p>
            Savings her pleased are several started females met. Short her not among being any.
            Thing of judge fruit charm views do. Miles mr an forty along as he. She education get
            middleton day agreement performed preserved unwilling. Do however as pleased offence
            outward beloved by present. By outward neither he so covered amiable greater. Juvenile
            proposal betrayed he an informed weddings followed. Precaution day see imprudence
            sympathize principles. At full leaf give quit to in they up.
          </p>

          <p>
            Situation admitting promotion at or to perceived be. Mr acuteness we as estimable
            enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton
            suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber
            pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe
            service arrived civilly add all. Acuteness allowance an at eagerness favourite in
            extensive exquisite ye.
          </p>

          <p>
            In to am attended desirous raptures declared diverted confined at. Collected instantly
            remaining up certainly to necessary as. Over walk dull into son boy door went new. At or
            happiness commanded daughters as. Is handsome an declared at received in extended
            vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat
            case left use. Match round scale now sex style far times. Your me past an much.
          </p>

          <p>
            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now
            easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may
            purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He
            less do quit evil is. Add matter family active mutual put wishes happen.
          </p>
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  })
  .add('cxl-institute-layout-nav', () => {
    return html`
      <cxl-institute-layout>
        <nav class="menu menu--institute-icon-nav" slot="icon-nav">
          <h3 class="menu__title screen-reader-text">cxl-2019/institute-icon-nav</h3>

          <ul class="menu__items">
            <li id="menu-item-1031803" class="menu__item has-children ">
              <a href="#" class="menu__link">TOP</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1031802" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/practitioners/" class="menu__link"
                    ><strong>C<em>XL</em></strong></a
                  >
                </li>
                <li id="menu-item-1031801" class="menu__item ">
                  <a class="menu__link">cxl:nav-trainings</a>
                </li>
                <li id="menu-item-1031804" class="menu__item ">
                  <a class="menu__link">cxl:nav-roadmap</a>
                </li>
                <li id="menu-item-1031805" class="menu__item ">
                  <a href="#" class="menu__link">cxl:nav-discover</a>
                </li>
              </ul>
            </li>
            <li id="menu-item-1031806" class="menu__item has-children ">
              <a class="menu__link">BOTTOM</a>
              <ul class="menu__sub-menu">
                <li id="menu-item-1031808" class="menu__item ">
                  <a href="https://conversionxli.warmpress.com/my-account/" class="menu__link"
                    >lumo:user</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- Sidebar -->
        <h3 slot="sidebar-header">Training Manager</h3>
        <div class="sidebar-content" slot="sidebar-content">
          <strong class="extra-heading">Digital analytics minidegree program</strong>
          <vaadin-details theme="sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
          <vaadin-details theme="sidebar-track" opened>
            <div slot="summary">Google Analytics</div>
            <div>
              <cxl-institute-sidebar-items>
                <cxl-institute-sidebar-item item-type="track" track-value="1:42">
                  <!-- href class active -->
                  <a href="trainings/analytics-fundamentals/484381">Analytics fundamentals</a>
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/google-analytics-for-beginners/179345"
                    >Google Analytics for beginners</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/conducting-an-analytics-audit/12230"
                    >Conducting an analytics audit</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/using-analytics-to-find-conversion-opportunities/12673"
                    >Using analytics to find conversion opportunities</a
                  >
                </cxl-institute-sidebar-item>
                <cxl-institute-sidebar-item item-type="track" track-value="3:14">
                  <a href="trainings/intermediate-google-analytics/149924"
                    >Intermediate Google Analytics</a
                  >
                </cxl-institute-sidebar-item>
              </cxl-institute-sidebar-items>
            </div>
          </vaadin-details>
        </div>

        <!-- Content -->
        <cxl-institute-content>
          <cxl-institute-content-header with-button slot="content-header">
            Course
            <vaadin-button theme="primary main-button" slot="header-button">
              Optional button
            </vaadin-button>
          </cxl-institute-content-header>

          <h2>Betrayed cheerful declared end and</h2>

          <p>
            Certainty listening no no behaviour existence assurance situation is. Because add why
            not esteems amiable him. Interested the unaffected mrs law friendship add principles.
            Indeed on people do merits to. Court heard which up above hoped grave do. Answer living
            law things either sir bed length. Looked before we an on merely. These no death he at
            share alone. Yet outward the him compass hearted are tedious.
          </p>

          <p>
            Written enquire painful ye to offices forming it. Then so does over sent dull on.
            Likewise offended humoured mrs fat trifling answered. On ye position greatest so
            desirous. So wound stood guest weeks no terms up ought. By so these am so rapid blush
            songs begin. Nor but mean time one over.
          </p>

          <p>
            Savings her pleased are several started females met. Short her not among being any.
            Thing of judge fruit charm views do. Miles mr an forty along as he. She education get
            middleton day agreement performed preserved unwilling. Do however as pleased offence
            outward beloved by present. By outward neither he so covered amiable greater. Juvenile
            proposal betrayed he an informed weddings followed. Precaution day see imprudence
            sympathize principles. At full leaf give quit to in they up.
          </p>

          <p>
            Situation admitting promotion at or to perceived be. Mr acuteness we as estimable
            enjoyment up. An held late as felt know. Learn do allow solid to grave. Middleton
            suspicion age her attention. Chiefly several bed its wishing. Is so moments on chamber
            pressed to. Doubtful yet way properly answered humanity its desirous. Minuter believe
            service arrived civilly add all. Acuteness allowance an at eagerness favourite in
            extensive exquisite ye.
          </p>

          <p>
            In to am attended desirous raptures declared diverted confined at. Collected instantly
            remaining up certainly to necessary as. Over walk dull into son boy door went new. At or
            happiness commanded daughters as. Is handsome an declared at received in extended
            vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat
            case left use. Match round scale now sex style far times. Your me past an much.
          </p>

          <p>
            Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now
            easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may
            purse means few blind. Exquisite newspaper attending on certainty oh suspicion of. He
            less do quit evil is. Add matter family active mutual put wishes happen.
          </p>
        </cxl-institute-content>
      </cxl-institute-layout>
    `;
  });