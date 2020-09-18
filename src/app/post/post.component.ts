import {ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() post: Post
  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef

  removePost() {
    this.onRemove.emit(this.post.id)
  }

}
