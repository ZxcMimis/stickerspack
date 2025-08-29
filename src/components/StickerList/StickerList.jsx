import style from './StickerList.module.scss';

import { Component } from "react";

import stickersData from '../../stickers.json';
import { Sticker } from "../Sticker/Sticker";

export class StickerList extends Component {
    
    render() {
        return (
            <ul className={style.list}>
                {stickersData.map((sticker, index) =>
                    <Sticker
                        key={index}
                        selectSticker={() => this.props.selectedSticker(sticker.label, sticker.img)}
                        stickerData={sticker}
                    />
                )}
            </ul>
        )
    }
}