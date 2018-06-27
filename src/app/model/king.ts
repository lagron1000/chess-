import { Piece } from './base-piece';
import { GameService } from '../game.service';

export class King extends Piece {
    constructor(type, color, gameService) {
        super(type, color, gameService);


        this.b = '../../assets/pieces_B/King-Yellow-icon-75.png';
        this.w = '../../assets/pieces_Y/King-Yellow-icon.png';
        this.imgUrl = this.color === 'white' ? this.w : this.b;

    }

    moveOptions(myX, myY) {
        const arr = [];
        const optionsArr = arr.concat(
            this.run(0, -1, myX, myY),
            this.run(-1, 0, myX, myY),
            this.run(0, 1, myX, myY),
            this.run(1, 0, myX, myY),
            this.run(1, 1, myX, myY),
            this.run(-1, -1, myX, myY),
            this.run(1, -1, myX, myY),
            this.run(-1, 1, myX, myY),
        )
        return optionsArr;
    }
    unfilteredMoveOptions(myX, myY) {
        const arr = [];
        const optionsArr = arr.concat(
            this.unfilteredOptions(0, -1, myX, myY),
            this.unfilteredOptions(-1, 0, myX, myY),
            this.unfilteredOptions(0, 1, myX, myY),
            this.unfilteredOptions(1, 0, myX, myY),
            this.unfilteredOptions(1, 1, myX, myY),
            this.unfilteredOptions(-1, -1, myX, myY),
            this.unfilteredOptions(1, -1, myX, myY),
            this.unfilteredOptions(-1, 1, myX, myY),
        )
        return optionsArr;
    }

    

    run(xMovment, yMovment, currX, currY) {
        let options = [];
        let currPiece;
      
            for (let i = 0; i < 1; i++) {
                currX += xMovment;
                currY += yMovment;

                currPiece = this.gameService.getPieceFromBoard(currX, currY);
                if (!currPiece && currX < 8 && currY < 8 && currX >= 0 && currY >= 0) {
                    options.push({ myX: currX, myY: currY });
                }
            }

            if (currPiece && currPiece.color != this.color) {
                options.push({ myX: currX, myY: currY });
            }

            return options;
    }
}
