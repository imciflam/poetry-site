import React from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import EnhancedMenu from "./EnhancedMenu";

const menuItems = [
  {
    key: "1",
    caption: "Глава 1",
    subMenuItems: [
      {
        key: "1.1",
        caption: "Снега в полях...",
        onClick: () => { }
      }, {
        key: "1.2",
        caption: "Дороги",
        onClick: () => { }
      },
      {
        key: "1.3",
        caption: "Россия, милая Россия",
        onClick: () => { }
      },
      {
        key: "1.4",
        caption: "Чувство красоты",
        onClick: () => { }
      },
      {
        key: "1.5",
        caption: "Горы Кавказа",
        onClick: () => { }
      },
      {
        key: "1.6",
        caption: "Белая береза",
        onClick: () => { }
      },
      {
        key: "1.7",
        caption: "С добрым утром!",
        onClick: () => { }
      },
      {
        key: "1.8",
        caption: "Ты сын Армении и гражданин России...",
        onClick: () => { }
      },
      {
        key: "1.9",
        caption: "Ждут тебя дороги русские",
        onClick: () => { }
      },
      {
        key: "1.10",
        caption: "Летите голуби, летите",
        onClick: () => { }
      },
      {
        key: "1.11",
        caption: "Русская душа",
        onClick: () => { }
      },
      {
        key: "1.12",
        caption: "Весна",
        onClick: () => { }
      }, ,
      {
        key: "1.13",
        caption: "Родные березки",
        onClick: () => { }
      },
    ]
  },
  {
    key: "2",
    caption: "Глава 2",
    subMenuItems: [
      {
        key: "2.1",
        caption: "В память о Евтушенко",
        onClick: () => { }
      }, {
        key: "2.2",
        caption: "Е.П.",
        onClick: () => { }
      }, {
        key: "2.3",
        caption: "Когда уходит друг",
        onClick: () => { }
      }
    ]
  },
  {
    key: "3",
    caption: "Глава 3",
    subMenuItems: [
      {
        key: "3.1",
        caption: "Проходят дни, недели, годы...",
        onClick: () => { }
      }, {
        key: "3.2",
        caption: "Вы уважительно корректны",
        onClick: () => { }
      }, {
        key: "3.3",
        caption: "Сердце, близкое тебе",
        onClick: () => { }
      }, {
        key: "3.4",
        caption: "Поцелуй",
        onClick: () => { }
      }, {
        key: "3.5",
        caption: "Средь цветов луговых",
        onClick: () => { }
      }, {
        key: "3.6",
        caption: "Губами алыми горя",
        onClick: () => { }
      }, {
        key: "3.7",
        caption: "Алые губы",
        onClick: () => { }
      }, {
        key: "3.8",
        caption: "Девочка с косичками",
        onClick: () => { }
      }, {
        key: "3.9",
        caption: "Карие глаза",
        onClick: () => { }
      }, {
        key: "3.10",
        caption: "Она",
        onClick: () => { }
      }, {
        key: "3.11",
        caption: "Образ",
        onClick: () => { }
      }, {
        key: "3.12",
        caption: "Улыбка Джаконды",
        onClick: () => { }
      }, {
        key: "3.13",
        caption: "Как все не просто в этом мире!",
        onClick: () => { }
      }, {
        key: "3.14",
        caption: "Миг счастья",
        onClick: () => { }
      },
    ]
  },
  {
    key: "4",
    caption: "Глава 4",
    subMenuItems: [
      {
        key: "4.1",
        caption: "Ну а я грущу и весел",
        onClick: () => { }
      }, {
        key: "4.2",
        caption: "Плакучие ивы",
        onClick: () => { }
      }, {
        key: "4.3",
        caption: "8 марта",
        onClick: () => { }
      }, {
        key: "4.4",
        caption: "Чудесный день",
        onClick: () => { }
      }, {
        key: "4.5",
        caption: "8 марта - день мимозы",
        onClick: () => { }
      }, {
        key: "4.6",
        caption: "С добрым утром",
        onClick: () => { }
      }, {
        key: "4.7",
        caption: "Женские руки",
        onClick: () => { }
      },
    ]
  },
  {
    key: "5",
    caption: "Глава 5",
    subMenuItems: [
      {
        key: "5.1",
        caption: "Грустна судьба, когда один",
        onClick: () => { }
      }, {
        key: "5.2",
        caption: "Мама",
        onClick: () => { }
      }, {
        key: "5.3",
        caption: "Родителей не выбирают",
        onClick: () => { }
      },
    ]
  },
  {
    key: "6",
    caption: "Глава 6",
    subMenuItems: [
      {
        key: "6.1",
        caption: "Мечты, мечты",
        onClick: () => { }
      },
      {
        key: "6.2",
        caption: "Где ваша мудрость?",
        onClick: () => { }
      },
      {
        key: "6.3",
        caption: "Мечты заката",
        onClick: () => { }
      },
      {
        key: "6.4",
        caption: "Как все запутанно и просто",
        onClick: () => { }
      },
      {
        key: "6.5",
        caption: "Баня - это праздник года",
        onClick: () => { }
      },
    ]
  },
  {
    key: "7",
    caption: "Глава 7",
    subMenuItems: [
      {
        key: "7.1",
        caption: "Юная душа",
        onClick: () => { }
      }, {
        key: "7.2",
        caption: "Е.Д. - на день совершеннолетия",
        onClick: () => { }
      }, {
        key: "7.3",
        caption: "Старость",
        onClick: () => { }
      }, {
        key: "7.4",
        caption: "Мы становимся старше",
        onClick: () => { }
      }, {
        key: "7.5",
        caption: "Когда смотрю на годы жизни",
        onClick: () => { }
      }, {
        key: "7.6",
        caption: "Не покидай надежды лик",
        onClick: () => { }
      }, {
        key: "7.7",
        caption: "Приходит старость",
        onClick: () => { }
      }, {
        key: "7.8",
        caption: "Живи и властвуй",
        onClick: () => { }
      }, {
        key: "7.9",
        caption: "С днем науки",
        onClick: () => { }
      }, {
        key: "7.10",
        caption: "Счастье жизни/Пухастики",
        onClick: () => { }
      }, {
        key: "7.11",
        caption: "Е.Д. - Праздник",
        onClick: () => { }
      }, {
        key: "7.12",
        caption: "Души творенье",
        onClick: () => { }
      }
    ]
  },
];

export default class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorElement: null
    };
  }

  handleButtonClick = event => {
    this.setState({
      anchorElement: event.currentTarget
    });
  };

  handleMenuClose = () => {
    this.setState({
      anchorElement: null
    });
  };

  render() {
    const { anchorElement } = this.state;
    return (
      <React.Fragment>
        <IconButton onClick={this.handleButtonClick}>
          <AddIcon />
        </IconButton>
        <EnhancedMenu
          open={Boolean(anchorElement)}
          menuItems={menuItems}
          anchorElement={anchorElement}
          onClose={this.handleMenuClose}
        />
      </React.Fragment>
    );
  }
}
