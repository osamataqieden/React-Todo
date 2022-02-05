import React from 'react';
class Header extends React.Component {
    render(){
        return (
            <div className={'header ' + this.props.theme}>
            <div className={'header-title ' + this.props.theme}>
                <p>
                    TODO
                </p>
            </div>
            <a className={'header-button ' + this.props.theme } onClick={this.props.changeThemeHandler}>
                <img className={'header-change-theme ' + this.props.theme} />
            </a>
        </div>
        )
    }
}

export default Header;