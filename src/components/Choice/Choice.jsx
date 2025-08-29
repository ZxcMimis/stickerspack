import style from'./Choice.module.scss'

import { Component } from "react";

export class Choice extends Component {
    render() {
        const selectSticker = this.props.selectedSticker
        const selectStickerImg = this.props.selectedStickerImg
        return (
            <div className={style.flexbox}>
                <p className={style.text}>{selectSticker === '' ? 'Оберіть стікер' : `${selectSticker}`}</p>
                <div className={style.div}>
                <img src={selectStickerImg === '' ? '#' : selectStickerImg} alt={selectSticker} />
                </div>
            </div>
        )
    }
}