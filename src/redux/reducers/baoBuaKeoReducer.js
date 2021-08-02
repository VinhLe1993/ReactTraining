const stateDefault = {
  arrSelector: [
    { id: "keo", img: "./img/BaoBuaKeo/keo.png", select: false },
    { id: "bua", img: "./img/BaoBuaKeo/bua.png", select: true },
    { id: "bao", img: "./img/BaoBuaKeo/bao.png", select: false },
  ],
  result: "You Won!",
  roundYouWon: 10,
  roundYouPlayed: 6,
  computer: { id: "bua", img: "./img/BaoBuaKeo/bua.png" },
};

const baoBuaKeoReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "ROCK_PAPER_SCISSOR": {
      let arrSelectedUpdate = [...state.arrSelector];
      //Tạo ra mảng cược mới từ mảng cược cũ và action.selectID do người dùng truyền lên
      arrSelectedUpdate = arrSelectedUpdate.map((item, index) => {
        if (item.id === action.selectID) {
          return { ...item, select: true };
        }
        return { ...item, select: false };
      });
      state.arrSelector = arrSelectedUpdate;
      return { ...state };
    }
    case "RANDOM": {
      let randomNum = Math.floor(Math.random() * 3);
      let randomSlt = state.arrSelector[randomNum];

      state.computer = randomSlt;

      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default baoBuaKeoReducer;
