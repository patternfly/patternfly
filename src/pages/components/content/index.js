import React from 'react'
import Documentation from '@siteComponents/Documentation'
import Example from '@siteComponents/Example'
import Content, { Docs } from '@components/Content'

export default () => {
  return (
    <Documentation docs={Docs}>
      <Example heading="Contents">
        <Content>
          <h1>Hello World</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub works as well!</p>
          <h2>Second level</h2>
          <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
          <ul>
            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.
              <ul>
                <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
              </ul>
            </li>
            <li>Ut non enim metus.</li>
          </ul>
          <h3>Third level</h3>
          <p>Quisque ante lacus, malesuada ac auctor vitae, congue <a href="#">non ante</a>. Phasellus lacus ex, semper ac tortor nec, fringilla condimentum orci. Fusce eu rutrum tellus.</p>
          <ol>
            <li>Donec blandit a lorem id convallis.</li>
            <li>Cras gravida arcu at diam gravida gravida.</li>
            <li>Integer in volutpat libero.</li>
            <li>Donec a diam tellus.</li>
            <li>Aenean nec tortor orci.</li>
            <li>Quisque aliquam cursus urna, non bibendum massa viverra eget.</li>
            <li>Vivamus maximus ultricies pulvinar.</li>
          </ol>

          <blockquote>Ut venenatis, nisl scelerisque sollicitudin fermentum, quam libero hendrerit ipsum, ut blandit est tellus sit amet turpis.</blockquote>

          <p>Quisque at semper enim, eu hendrerit odio. Etiam auctor nisl et <em>justo sodales</em> elementum. Maecenas ultrices lacus quis neque consectetur, et lobortis nisi molestie.</p>
          <p>Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>

          <dl>
            <dt>Web</dt>
            <dd>The part of the Internet that contains websites and web pages</dd>
            <dt>HTML</dt>
            <dd>A markup language for creating web pages</dd>
            <dt>CSS</dt>
            <dd>A technology to make HTML look better</dd>
          </dl>

          <p>Suspendisse egestas sapien non felis placerat elementum. Morbi tortor nisl, suscipit sed mi sit amet, mollis malesuada nulla. Nulla facilisi. Nullam ac erat ante.</p>
          <h4>Fourth level</h4>
          <p>Nulla efficitur eleifend nisi, sit amet bibendum sapien fringilla ac. Mauris euismod metus a tellus laoreet, at elementum ex efficitur.</p>

          <p>Maecenas eleifend sollicitudin dui, faucibus sollicitudin augue cursus non. Ut finibus eleifend arcu ut vehicula. Mauris eu est maximus est porta condimentum in eu justo. Nulla id iaculis sapien.</p>

          <small>Sometimes you need small text to display things like date created</small>

          <p>Phasellus porttitor enim id metus volutpat ultricies. Ut nisi nunc, blandit sed dapibus at, vestibulum in felis. Etiam iaculis lorem ac nibh bibendum rhoncus. Nam interdum efficitur ligula sit amet ullamcorper. Etiam tristique, leo vitae porta faucibus, mi lacus laoreet metus, at cursus leo est vel tellus. Sed ac posuere est. Nunc ultricies nunc neque, vitae ultricies ex sodales quis. Aliquam eu nibh in libero accumsan pulvinar. Nullam nec nisl placerat, pretium metus vel, euismod ipsum. Proin tempor cursus nisl vel condimentum. Nam pharetra varius metus non pellentesque.</p>
          <h5>Fifth level</h5>
          <p>Aliquam sagittis rhoncus vulputate. Cras non luctus sem, sed tincidunt ligula. Vestibulum at nunc elit. Praesent aliquet ligula mi, in luctus elit volutpat porta. Phasellus molestie diam vel nisi sodales, a eleifend augue laoreet. Sed nec eleifend justo. Nam et sollicitudin odio.</p>

          <h6>Sixth level</h6>
          <p>Cras in nibh lacinia, venenatis nisi et, auctor urna. Donec pulvinar lacus sed diam dignissim, ut eleifend eros accumsan. Phasellus non tortor eros. Ut sed rutrum lacus. Etiam purus nunc, scelerisque quis enim vitae, malesuada ultrices turpis. Nunc vitae maximus purus, nec consectetur dui. Suspendisse euismod, elit vel rutrum commodo, ipsum tortor maximus dui, sed varius sapien odio vitae est. Etiam at cursus metus.</p>
        </Content>
      </Example>
      <Example heading="This is here for visual design review purposes only and will be deleted">
        <Content>
          <h1 className="pf-is-hero">Hero Title Let's look at vertical rhythm and why it's so important</h1>
          <h1>Main Title Let's look at vertical rhythm and why it's so important</h1>
          <h2>Secondary Title Let's look at vertical rhythm and why it's so important</h2>
          <h3>Sub-title Let's look at vertical rhythm and why it's so important, Let's look at vertical rhythm and why it's so important</h3>
          <h4>Fourth level title, Let's look at vertical rhythm and why it's so important, Let's look at vertical rhythm and why it's so important</h4>
          <h5>Fifth level title, Let's look at vertical rhythm and why it's so important, Let's look at vertical rhythm and why it's so important</h5>
          <h6>Sixth level title, Let's look at vertical rhythm and why it's so important, Let's look at vertical rhythm and why it's so important</h6>
          <p className="pf-LineHeight-is-sm">This is small line-height. Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
          <p className="pf-LineHeight-is-md">This is the default line-height that would be used throughout other components, but it is not the default in the Content component. Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
          <p>This is large line-height. It is not the default line-height for other components, but it is used for anything in the body of the Contents component. Sed sagittis enim ac tortor maximus rutrum. Nulla facilisi. Donec mattis vulputate risus in luctus. Maecenas vestibulum interdum commodo.</p>
        </Content>
      </Example>
    </Documentation>
  )
}
