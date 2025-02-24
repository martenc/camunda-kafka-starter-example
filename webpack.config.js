var path = require('path');
var webpack = require('webpack');
var Dotenv = require('dotenv-webpack');

module.exports = {
    entry: [
        'babel-polyfill',
	    'script!jquery/dist/jquery.min.js',
	    'script!foundation-sites/dist/foundation.min.js',
	    './src/main/js/reactjs/application/order-app.jsx'
	  ],
	externals: {
		jquery: 'jQuery'
	},
	plugins: [
	  new webpack.ProvidePlugin({
		  '$': 'jquery',
		  'jQuery': 'jquery'
	  }),
      new Dotenv()
    ],
    cache: false,
    debug: true,
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            //Generic Reusable Components
            client: 'src/main/js/reactjs/application/components/client.jsx',
            follow: 'src/main/js/reactjs/application/components/follow.jsx',
            IFrame: 'src/main/js/reactjs/application/components/IFrame.jsx',
            UpdateNoteDialog: 'src/main/js/reactjs/application/components/note/UpdateNoteDialog.jsx',
            DisplayDate: 'src/main/js/reactjs/application/components/date/DisplayDate.jsx',
            DisplayDateTime: 'src/main/js/reactjs/application/components/date/DisplayDateTime.jsx',

            MessageLine: 'src/main/js/reactjs/application/components/message/MessageLine.jsx',
            MessageDetail: 'src/main/js/reactjs/application/components/message/MessageDetail.jsx',
            MessageList: 'src/main/js/reactjs/application/components/message/MessageList.jsx',
            MessageFilterBar: 'src/main/js/reactjs/application/components/message/MessageFilterBar.jsx',

            TenantMain: 'src/main/js/reactjs/application/components/tenant/TenantMain.jsx',
            TenantLine: 'src/main/js/reactjs/application/components/tenant/TenantLine.jsx',
            TenantList: 'src/main/js/reactjs/application/components/tenant/TenantList.jsx',
            TenantDetail: 'src/main/js/reactjs/application/components/tenant/TenantDetail.jsx',
            TenantFilterBar: 'src/main/js/reactjs/application/components/tenant/TenantFilterBar.jsx',
            Tenant: 'src/main/js/reactjs/application/components/tenant/Tenant.jsx',

            Import: 'src/main/js/reactjs/application/components/Import.jsx',
            ImportRenewalForm: 'src/main/js/reactjs/application/components/import/ImportRenewalForm.jsx',
            ImportTenantForm: 'src/main/js/reactjs/application/components/import/ImportTenantForm.jsx',
            ImportCannedMessageForm: 'src/main/js/reactjs/application/components/import/ImportCannedMessageForm.jsx',
            ImportRenewalMain: 'src/main/js/reactjs/application/components/import/ImportRenewalMain.jsx',
            ImportTenantMain: 'src/main/js/reactjs/application/components/import/ImportTenantMain.jsx',
            ImportCannedMessageMain: 'src/main/js/reactjs/application/components/import/ImportCannedMessageMain.jsx',

            ContactMain: 'src/main/js/reactjs/application/components/contact/Home.jsx',
            ContactLine: 'src/main/js/reactjs/application/components/contact/Detail.jsx',
            ContactList: 'src/main/js/reactjs/application/components/contact/DetailForm.jsx',
            ContactDetail: 'src/main/js/reactjs/application/components/contact/FilterBar.jsx',
            ContactFilterBar: 'src/main/js/reactjs/application/components/contact/info.jsx',

            uriListConverter: 'src/main/js/api/uriListConverter.js',
            uriTemplateInterceptor: 'src/main/js/api/uriTemplateInterceptor.js',

            applicaitonStyles: 'src/main/resources/static/app.css',
            // END Generic Reusable Components

            // Use Case Components
            // Triage App Components
            // TriageMain: 'src/main/js/reactjs/application/triage/components/Main.jsx',
            // TriageNav: 'src/main/js/reactjs/application/triage/components/Nav.jsx',
            //
            // TriageMarketingBar: 'src/main/js/reactjs/application/triage/components/MarketingBar.jsx',
            // TriageStatusBar: 'src/main/js/reactjs/application/triage/components/StatusBar.jsx',
            // TriageFooterBar: 'src/main/js/reactjs/application/triage/components/FooterBar.jsx',
            //
            // TriageHome: 'src/main/js/reactjs/application/triage/components/home/Home.jsx',
            // TriageFilterBar: 'src/main/js/reactjs/application/triage/components/home/FilterBar.jsx',
            // TriageActionBar: 'src/main/js/reactjs/application/triage/components/home/ActionBar.jsx',
            // TriageInfo: 'src/main/js/reactjs/application/triage/components/home/Info.jsx',
            //
            // Task: 'src/main/js/reactjs/application/triage/components/task/Home.jsx',
            // TaskLine: 'src/main/js/reactjs/application/triage/components/task/Line.jsx',
            // TaskList: 'src/main/js/reactjs/application/triage/components/task/List.jsx',
            // TaskDetail: 'src/main/js/reactjs/application/triage/components/task/Detail.jsx',
            // TaskActionForm: 'src/main/js/reactjs/application/triage/components/task/ActionForm.jsx',
            // TaskSearchForm: 'src/main/js/reactjs/application/triage/components/task/SearchForm.jsx',
            // TaskOptionForm: 'src/main/js/reactjs/application/triage/components/task/OptionForm.jsx',
            // TaskInfo: 'src/main/js/reactjs/application/triage/components/task/Info.jsx',
            // TaskFilterBar: 'src/main/js/reactjs/application/triage/components/task/FilterBar.jsx',

            //Order App Components
            Main: 'src/main/js/reactjs/application/order/components/Main.jsx',
            MarketingBar: 'src/main/js/reactjs/application/order/components/MarketingBar.jsx',
            StatusBar: 'src/main/js/reactjs/application/order/components/StatusBar.jsx',
            FooterBar: 'src/main/js/reactjs/application/order/components/FooterBar.jsx',

            Home: 'src/main/js/reactjs/application/order/components/home/Home.jsx',
            Detail: 'src/main/js/reactjs/application/order/components/home/Detail.jsx',
            StartForm: 'src/main/js/reactjs/application/order/components/home/StartForm.jsx',
            DetailForm: 'src/main/js/reactjs/application/order/components/home/DetailForm.jsx',
            Info: 'src/main/js/reactjs/application/order/components/home/Info.jsx',
            FilterBar: 'src/main/js/reactjs/application/order/components/home/FilterBar.jsx',
            ActionBar: 'src/main/js/reactjs/application/order/components/home/ActionBar.jsx',

            ItemHome: 'src/main/js/reactjs/application/order/components/item/Home.jsx',
            ItemLine: 'src/main/js/reactjs/application/order/components/item/Line.jsx',
            ItemList: 'src/main/js/reactjs/application/order/components/item/List.jsx',
            ItemDetail: 'src/main/js/reactjs/application/order/components/item/Detail.jsx',
            ItemForm: 'src/main/js/reactjs/application/order/components/item/Form.jsx',
            ItemInfo: 'src/main/js/reactjs/application/order/components/item/Info.jsx',
            ItemFilterBar: 'src/main/js/reactjs/application/order/components/item/FilterBar.jsx',
            ItemNavBar: 'src/main/js/reactjs/application/order/components/item/NavBar.jsx',
            ItemActionBar: 'src/main/js/reactjs/application/order/components/item/ActionBar.jsx',

            OrderHome: 'src/main/js/reactjs/application/order/components/order/Home.jsx',
            OrderLine: 'src/main/js/reactjs/application/order/components/order/Line.jsx',
            OrderList: 'src/main/js/reactjs/application/order/components/order/List.jsx',
            OrderDetail: 'src/main/js/reactjs/application/order/components/order/Detail.jsx',
            OrderForm: 'src/main/js/reactjs/application/order/components/order/Form.jsx',
            OrderInfo: 'src/main/js/reactjs/application/order/components/order/Info.jsx',
            OrderFilterBar: 'src/main/js/reactjs/application/order/components/order/FilterBar.jsx',
            OrderNavBar: 'src/main/js/reactjs/application/order/components/order/NavBar.jsx',
            OrderActionBar: 'src/main/js/reactjs/application/order/components/order/ActionBar.jsx',

            // END Use Case Components

        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    cacheDirectory: false,
                    presets: ['es2015', 'react', 'stage-0']
                },
                test: path.join(__dirname, '.'),
                exclude: /(node_modules|bower_components)/,
            },
            {loaders: ['style', 'css', 'sass'], test: /\.scss$/ }
        ]
    },
    devtool: ['cheap-module-source-map', 'sourcemaps']
};
