Feature('CodeceptJS Demonstration');

Scenario('test some forms', ({ I }) => {
    pause()
    I.startActivity('com.android.chrome', 'org.chromium.chrome.browser.ChromeTabbedActivity')
    I.switchToWeb()
    I.amOnPage('https://kepco.jp/miruden/servicetop/login')
    I.fillField('会員ID', 'entropy')
    I.fillField('パスワード', secret('smithsonian16'))
    I.click('//div') // キー入力画面を消すためのダミー
    I.click('#container_0_Login')
    I.click('//li[@id="header_0_HapiePointIconMenu"]/a')
    pause()

});

Scenario('SmartNews', ({ I }) => {
    pause()
    I.startActivity('jp.gocro.smartnews.android', 'jp.gocro.smartnews.android.activity.SmartNewsActivity')
    I.tap('//android.view.View[@content-desc="トップ"]')
    I.tap('新しい記事')
    I.click('//android.widget.TextView[@text="毎日貰える！"]')
    I.performSwipe({x: 100, y: 1000}, {x:100, y: 0})
    I.performSwipe({x: 100, y: 1000}, {x:100, y: 0})
    I.performSwipe({x: 100, y: 1000}, {x:100, y: 0})
    I.performSwipe({x: 100, y: 1000}, {x:100, y: 0})
    I.performSwipe({x: 100, y: 1000}, {x:100, y: 0})
    // 「タップしてポイントゲット」のボタンはwebviewにあって押せない。。。
    I.switchToWeb('//*[@resource-id="jp.gocro.smartnews.android:id/web_view_wrapper"]/android.widget.FrameLayout/android.widget.WebView')
    I.switchToWeb()
    // I.tap('ミッションの確認はこちら')
    I.tap('#jp.gocro.smartnews.android:id/close_fab')
});
