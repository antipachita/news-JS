import './sources.css';
import { sourcearrayData } from '../../interfaces/interfaces';

class Sources {
  draw(data: sourcearrayData[]) {
    console.log(data)
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

    data.forEach((item): void => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

      (<HTMLElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
      if (item.id) {
        (<HTMLElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);
      }

      fragment.append(sourceClone);
    });

    (<HTMLElement>document.querySelector('.sources')).append(fragment);
  }
}

export default Sources;
