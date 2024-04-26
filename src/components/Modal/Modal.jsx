import React, { useEffect } from 'react';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     const { largeImageURL } = this.props.image;
//     return createPortal(
//       <div className="Overlay" onClick={this.handleBackdropClick}>
//         <div className="Modal">
//           <img src={largeImageURL} alt="" />
//         </div>
//       </div>,
//       modalRoot,
//     );
//   }
// }

export const Modal = ({image, onClose}) =>{
  useEffect(() =>{
    const handleKeyDown = event =>{
      if (event.code === 'Escape') {
      onClose();} }
      document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  },
  [onClose])


  const handleBackdropClick = event => {
         if (event.target === event.currentTarget) {
          onClose();
         }
       };

  return createPortal(
          <div className="Overlay" onClick={handleBackdropClick}>
            <div className="Modal">
             <img src={image} alt="" />
            </div>
         </div>,
         modalRoot,
        );

};