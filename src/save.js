import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-cta-popup',
    }) }>
      <div className="uncommon-cta-popup-title" dangerouslySetInnerHTML={{__html: attributes.text}}></div>
      <div className='uncommon-cta-popup-content'>
        <InnerBlocks.Content />
      </div>
		</div>
	);
}
