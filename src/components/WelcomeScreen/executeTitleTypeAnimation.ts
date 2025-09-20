function typeAnimation(elementId: string, text: string, cb?: () => void): void {
  const speedInMilliSeconds = 80;
  let counter = 0;

  const elementToBeTyped = document.getElementById(elementId) as HTMLElement;
  if (!elementToBeTyped) return;

  // ✅ Reset text before typing begins
  elementToBeTyped.textContent = '';

  const typeWriter = (): void => {
    if (counter < text.length) {
      elementToBeTyped.textContent += text.charAt(counter);
      counter++;
      setTimeout(typeWriter, speedInMilliSeconds);
    } else {
      cb?.();
    }
  };

  typeWriter();
}

function typeAnimationForAuthorName(cb: () => void): void {
  const author = `Deejay Geroso`;
  const spanElementId = 'title1-author-name';

  // ✅ Remove old span if it exists (prevents duplication on rerun)
  const oldSpan = document.getElementById(spanElementId);
  if (oldSpan) oldSpan.remove();

  const spanElement = document.createElement('SPAN');
  spanElement.setAttribute('id', spanElementId);

  const title1Element = document.getElementById('title1') as HTMLElement;
  if (!title1Element) return;

  title1Element.appendChild(spanElement);

  typeAnimation(spanElementId, author, cb);
}

export default function executeTitleTypeAnimation(): void {
  const title1Id = 'title1';
  const title2Id = 'title2';
  const title1Text = `Hello, I'm `;
  const title2Text = `I'm a Software Engineer`;

  // ✅ Reset both titles before typing starts
  const title1Element = document.getElementById(title1Id);
  const title2Element = document.getElementById(title2Id);
  if (title1Element) title1Element.textContent = '';
  if (title2Element) title2Element.textContent = '';

  setTimeout((): void => {
    typeAnimation(title1Id, title1Text, (): void => {
      typeAnimationForAuthorName((): void => {
        typeAnimation(title2Id, title2Text);
      });
    });
  }, 250);
}
