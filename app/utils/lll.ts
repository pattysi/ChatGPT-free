import React, { useEffect } from 'react';

const Modal = ({ show, onClose, children }) => {
  useEffect(() => {
    // 只有在客户端时才添加事件监听器
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose();
      }
    };

    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      // 组件卸载时移除事件监听器
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, [onClose]);

  // 如果不展示弹窗，则不渲染组件
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose}>关闭</button>
      </div>
      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-content {
          background: white;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default Modal;
