import Modal from 'components/Modal';
import { Component } from 'react';

export class Material extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { item, onDelete, onUpdate } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <p>
          <b>Название:</b> {item.title}
        </p>
        <p>
          <b>Ссылка:</b> {item.link}
        </p>

        <button type="button" onClick={this.toggleModal}>
          Открыть
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <button type="button" onClick={this.toggleModal}>
              Закрыть
            </button>
            <button
              type="button"
              onClick={() => {
                onUpdate({ id: item.id, title: Date.now() });
                this.toggleModal();
              }}
            >
              Редактировать
            </button>
            <button type="button" onClick={() => onDelete(item.id)}>
              Удалить
            </button>
          </Modal>
        )}
      </>
    );
  }
}
