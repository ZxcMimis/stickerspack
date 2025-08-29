import style from './Sticker.module.scss'

import { Component } from "react";

export class Sticker extends Component {

    render() {
        return (
            <li className={style.item}>
                <button className={style.btn} onClick={() => this.props.selectSticker(this.props.stickerData.label, this.props.stickerData.img)}>
                    <div>
                        <img className={style.img} src={this.props.stickerData.img} alt={this.props.stickerData.label} />
                        <p className={style.text}>{this.props.stickerData.label}</p>
                    </div>
                </button>
            </li>
        )
    }
}