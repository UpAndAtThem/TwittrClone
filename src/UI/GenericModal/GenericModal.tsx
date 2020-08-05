import React from 'react';
import ReactDOM from 'react-dom';
import GenericModalBackdrop from './GenericModalBackdrop/GenericModalBackdrop';

const modalRoot: any = document.getElementById('modal-root');

interface Props {
  styles: GenericObject;
  backdropOnClick: any;
  className: any;
}

type GenericObject = { [key: string]: any };

class GenericModal extends React.Component<Props> {
  el: HTMLDivElement;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return (
      ReactDOM.createPortal(
        <GenericModalBackdrop className={`backdrop ${this.props.className}`} onClick={this.props.backdropOnClick} styles={this.props.styles.backdropStyles}>
          {this.props.children}
        </GenericModalBackdrop>, this.el)
    )
  }
};

export default GenericModal;
