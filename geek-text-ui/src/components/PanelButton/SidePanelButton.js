import React, { Component } from 'react';
import './SidePanelButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import SidePanel from '../SidePanel/SidePanel';
import BackDrop from '../BackDrop/BackDrop';


class SidePanelButton extends Component {
    constructor(props) {
        super(props);
        this.openPanel = this.openPanel.bind(this);
        this.closePanel = this.closePanel.bind(this);
        this.state = {sidePanelOpen: false};
    }

    openPanel = () => {
        this.setState((prevState) => {
            return {sidePanelOpen: !prevState.sidePanelOpen}
        });
    };

    closePanel = () => {
        this.setState({sidePanelOpen: false});
    };

    render() {
        const sidepanelopen = this.state.sidePanelOpen;
        let backdrop;
        let sidepanel;

        if (sidepanelopen) {
            sidepanel = <SidePanel />;
            backdrop = <BackDrop clickBackdrop={this.closePanel} />;
        }   
        

        return (
            <div>
                <button className="panelButton" onClick={this.openPanel}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                {sidepanel}
                {backdrop}
            </div>
        );
    };
}

export default SidePanelButton;