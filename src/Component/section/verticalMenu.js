import React, {Component} from "react";
import './section.css'
import Section from './section'

class VerticalMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sections: [
                {
                    items: [
                        {id: 1, icon: require('./i/Logo.svg'), title: "swapo", ext: require('./i/Oval10.svg')},
                    ]
                },
                {
                    items: [
                        {id: 1, icon: require('./i/home.svg'), title: "Dashboard" , ext: require('./i/Path.svg')},
                        {id: 2, icon: require('./i/circle.svg'), title: " Analytics"},
                        {id: 3, icon: require('./i/circle1.svg'), title: " eCommerce"},

                    ]
                },
                {
                    title: "App",
                    items: [
                        {id: 1, icon: require('./i/mail.svg'), title: "Email"},
                        {id: 2, icon: require('./i/message-square.svg'), title: "Chat"},
                        {id: 3, icon: require('./i/check-square.svg'), title: "Todo"},
                        {id: 4, icon: require('./i/calendar.svg'), title: "Calendar"},
                    ]
                },
                {
                    title: "UI",
                    items: [
                        {id: 1, icon: require('./i/layout.svg'), title: "Grid" ,ext: require('./i/Path.svg')},
                        {id: 2, icon: require('./i/droplet.svg'), title: "Colors"},
                        {id: 3, icon: require('./i/archive.svg'), title: "Card" ,ext: require('./i/Path.svg')},
                        {id: 4, icon: require('./i/credit-card.svg'), title: "Table"},
                        {id: 5, icon: require('./i/grid.svg'), title: "Component" ,ext: require('./i/Path.svg')},
                    ]
                },
                {
                    title: "FORM",
                    items: [
                        {id: 1, icon: require('./i/copy.svg'), title: "Form Elements" ,ext: require('./i/Path.svg')},
                        {id: 2, icon: require('./i/sidebar.svg'), title: "Form Layouts"},
                        {id: 3, icon: require('./i/file-text.svg'), title: " Form Wizard"},
                        {id: 4, icon: require('./i/check-circle.svg'), title: "Form Validation"},
                    ]
                },
                {
                    title: "PAGES",
                    items: [
                        {id: 1, icon: require('./i/lock.svg'), title: "Authentication" ,ext: require('./i/Path.svg')},
                        {id: 2, icon: require('./i/clock.svg'), title: "Coming Soon"},
                        {id: 3, icon: require('./i/alert-triangle.svg'), title: "Error" ,ext: require('./i/Path.svg')},
                        {id: 4, icon: require('./i/anchor.svg'), title: " Maintenance"},
                        {id: 5, icon: require('./i/user.svg'), title: "Profile"},
                        {id: 6, icon: require('./i/help-circle.svg'), title: " FAQ"},
                        {id: 7, icon: require('./i/info.svg'), title: " Knowledge"},
                        {id: 8, icon: require('./i/search.svg'), title: "Base"},
                        {id: 9, icon: require('./i/file.svg'), title: " Search"},
                        {id: 10, icon: require('./i/check-circle.svg'), title: "Invoice"},

                    ]
                },
                {
                    title: "CHARTS & MAPS",
                    items: [
                        {id: 1, icon: require('./i/pie-chart.svg'), title: "Charts" ,ext: require('./i/Path.svg')},
                        {id: 2, icon: require('./i/map.svg'), title: "Google Map"},
                    ]
                },
                {
                    title: "EXTENSIONS ",
                    items: [
                        {id: 1, icon: require('./i/pocket.svg'), title: "Select" ,ext: require('./i/Path.svg')},
                        {id: 2, icon: require('./i/edit.svg'), title: "Quill Editor"},
                        {id: 3, icon: require('./i/droplet.svg'), title: "Drag & Drop"},
                        {id: 4, icon: require('./i/calendar.svg'), title: "Datepicker"},
                    ]
                },
                {
                    title: "OTHERS ",
                    items: [
                        {id: 1, icon: require('./i/menu.svg'), title: "Menu Levels" ,ext: require('./i/Path.svg')},
                        {id: 2, icon: require('./i/eye-off.svg'), title: "Disabled Menu"},

                    ]
                },
            ]
        }
    }

    render() {
        return (
            <div className="vertical-menu-block">
                {this.state.sections.map((s, i) => <Section key={i} items={s.items} title={s.title}/>)}
            </div>
        )
    }
}

export default VerticalMenu;