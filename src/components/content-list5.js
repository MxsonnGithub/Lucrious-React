import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './content-list5.css'

const ContentList5 = (props) => {
  const [isTermsVisible, setIsTermsVisible] = useState(true)
  const [isPrivacyVisible, setIsPrivacyVisible] = useState(false)
  const [isRefundVisible, setIsRefundVisible] = useState(false)
  return (
    <div className="content-list5-container thq-section-padding">
      <div className="content-list5-max-width thq-section-max-width thq-flex-column">
        <div className="content-list5-container1 thq-section-max-width thq-flex-row">
          {isTermsVisible && (
            <button
              onClick={() => {
                setIsPrivacyVisible(false)
                setIsTermsVisible(true)
                setIsRefundVisible(false)
              }}
              className="thq-button-filled"
            >
              {props.button}
            </button>
          )}
          {!isTermsVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(false)
                setIsTermsVisible(true)
                setIsPrivacyVisible(false)
              }}
              className="thq-button-outline"
            >
              {props.button}
            </button>
          )}
          {!isPrivacyVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsRefundVisible(false)
                setIsPrivacyVisible(true)
              }}
              className="thq-button-outline"
            >
              {props.button1}
            </button>
          )}
          {isPrivacyVisible && (
            <button
              onClick={() => {
                setIsTermsVisible(false)
                setIsPrivacyVisible(true)
                setIsRefundVisible(false)
              }}
              className="thq-button-filled"
            >
              {props.button1}
            </button>
          )}
          {!isRefundVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsPrivacyVisible(false)
                setIsTermsVisible(false)
              }}
              className="thq-button-outline"
            >
              {props.button2}
            </button>
          )}
          {isRefundVisible && (
            <button
              onClick={() => {
                setIsRefundVisible(true)
                setIsPrivacyVisible(false)
                setIsTermsVisible(false)
              }}
              className="thq-button-filled"
            >
              {props.button2}
            </button>
          )}
        </div>
        <div className="content-list5-container2 thq-flex-column">
          {isTermsVisible && (
            <div className="content-list5-container3">
              <ul className="thq-flex-column">
                <li className="thq-flex-column list-item">
                  <h2 className="content-list5-heading7 thq-heading-2">
                    {props.heading7}
                  </h2>
                  <p className="thq-body-small">{props.content7}</p>
                  <ul className="content-list5-ul1 thq-flex-column">
                    <li className="list-item">
                      <h3 className="thq-heading-3">{props.heading8}</h3>
                      <p className="thq-body-small">{props.content2}</p>
                    </li>
                    <li className="list-item">
                      <h3 className="thq-heading-3">{props.heading9}</h3>
                      <p className="thq-body-small">{props.content9}</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isPrivacyVisible && (
            <div className="content-list5-container4">
              <ul className="thq-flex-column">
                <li className="thq-flex-column list-item">
                  <h1 className="content-list5-heading1 thq-heading-2">
                    {props.heading1}
                  </h1>
                  <span className="thq-body-small">{props.content1}</span>
                  <ul className="content-list5-ul3 thq-flex-column">
                    <li className="thq-flex-column list-item">
                      <h1 className="thq-heading-3">{props.heading2}</h1>
                      <span className="thq-body-small">{props.content2}</span>
                    </li>
                    <li className="thq-flex-column list-item">
                      <h1 className="thq-heading-3">{props.heading3}</h1>
                      <span className="thq-body-small">{props.content3}</span>
                    </li>
                    <li className="thq-flex-column list-item">
                      <h1 className="thq-heading-3">{props.heading4}</h1>
                      <span className="thq-body-small">{props.content4}</span>
                    </li>
                    <li className="thq-flex-column list-item">
                      <h1 className="thq-heading-3">{props.heading5}</h1>
                      <span className="thq-body-small">{props.content5}</span>
                    </li>
                    <li className="thq-flex-column list-item">
                      <h1 className="thq-heading-3">{props.heading6}</h1>
                      <span className="thq-body-small">{props.content6}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
          {isRefundVisible && (
            <div className="content-list5-container5">
              <ul className="thq-flex-column">
                <li className="thq-flex-column list-item">
                  <h1 className="content-list5-heading10 thq-heading-2">
                    {props.heading10}
                  </h1>
                  <span className="thq-body-small">{props.content10}</span>
                  <ul className="content-list5-ul5 thq-flex-column">
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading11}</h1>
                      <span className="thq-body-small">{props.content11}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading12}</h1>
                      <span className="thq-body-small">{props.content12}</span>
                    </li>
                    <li className="list-item">
                      <h1 className="thq-heading-3">{props.heading13}</h1>
                      <span className="thq-body-small">{props.content13}</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

ContentList5.defaultProps = {
  heading7: 'FAQ',
  heading9: 'Other questions?',
  content2:
    'Lucrious does have a upload schedule that will not be revealed, But if you pay enough attention you might find it.',
  heading4: 'Sharing your data with 3rd parties',
  heading2: 'Types of data we collect',
  content6:
    'Ut doloremque aliquam qui veniam deserunt sit voluptates iusto et unde quod ut quam unde ut nemo eius! Ut saepe consequuntur non quibusdam soluta aut maiores eaque et rerum error nam incidunt saepe aut nihil voluptatem. 33 nulla quaerat est doloremque voluptatem ut libero magnam id placeat aliquid. Ea minus totam est inventore minus sed temporibus aperiam At ratione maiores eum libero consequatur aut laborum exercitationem.',
  heading10: 'Refund Policy',
  button2: 'Refund Policy',
  content5:
    'Lorem ipsum dolor sit amet. Ut cumque cupiditate eos perferendis tempora et ullam quis qui fugiat necessitatibus qui quia dolorem 33 earum reprehenderit eum rerum blanditiis. Et vitae distinctio 33 magni ratione ut odit rerum est nihil error et minus dolor quo harum fugiat. Eos quam assumenda id fugit optio aut magni sunt!  Ut iure aliquam vel velit modi sit voluptatibus atque ut corporis sint sit omnis enim a pariatur officiis aut nulla voluptate. In facere incidunt aut sapiente maxime qui quibusdam facilis non officia consectetur sit laboriosam libero aut cupiditate possimus ut sunt reiciendis. Et repudiandae magnam aut quaerat ipsam aut repellat laboriosam. Ab facilis deleniti ut voluptas molestiae sed omnis maiores ut aliquid culpa vel nesciunt saepe.  Aut placeat aspernatur aut alias nihil vel neque recusandae et corrupti accusantium ab quod temporibus ut nulla eaque et magnam nemo. Ad sunt minus rem earum delectus hic officia iste qui sunt quos non officiis illo vel doloribus perspiciatis. Ab soluta eius sed quidem dolores rem necessitatibus minus 33 minus commodi. Nam repudiandae libero non laboriosam voluptate et saepe fuga vel repudiandae pariatur aut assumenda illo.',
  content12:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading8: 'Upload schedule?',
  heading6: 'Cookies',
  heading5: 'Campaign tracking',
  content3:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
  heading1: 'Featured Content',
  content11:
    'Lorem ipsum dolor sit amet. Nam nihil facilis sit consequuntur internos qui minima rerum ut molestias laudantium aut iusto deserunt. Aut voluptatibus excepturi qui officia laudantium est repellendus tempore hic sunt debitis.  Ut galisum tempore in enim fugit eum pariatur possimus est tenetur nemo et sint sint et dolores Quis. Aut illum perspiciatis rem architecto culpa et fuga aliquid. Est omnis praesentium ut nisi internos rem quod totam et similique quis. Est tempore cumque aut recusandae labore qui error molestiae et possimus quia!  Eum Quis asperiores non nihil tempora qui quia voluptatem aut aspernatur aspernatur aut asperiores labore et sapiente quaerat qui suscipit quia. Ea nesciunt iste aut temporibus culpa sit dignissimos quaerat eum architecto voluptatum et nemo velit At harum harum.',
  heading3: 'How we use your data',
  heading13: 'Refunds',
  heading12: 'Damages and issues',
  content4:
    'Lorem ipsum dolor sit amet. Id galisum officiis rem quod internos qui provident quaerat hic minus eveniet est officiis galisum sit rerum dignissimos. Sit voluptatem alias et veniam rerum ea quod ipsam ut quam neque est nihil repellat est aspernatur voluptatem est voluptas ratione?  Ea vero tempore At soluta temporibus 33 galisum excepturi quo modi distinctio. Qui dolor soluta sit ipsam vitae et suscipit molestiae est consequatur galisum aut sapiente voluptatem sed quas eaque et minima minus?  Rem soluta consequatur et velit cupiditate sed eligendi laudantium rem pariatur galisum sit mollitia debitis eum delectus ipsum aut consequatur mollitia. Qui voluptatibus molestias ut totam Quis ea unde dolorem sit animi eveniet et galisum explicabo. Est culpa error ut voluptatibus voluptatem qui dignissimos dolorem quo laborum distinctio qui omnis perspiciatis ab facilis temporibus qui perspiciatis consectetur. Ab praesentium fugiat eos veritatis quam ex modi autem et sapiente dolorem?',
  heading11: 'General',
  button: 'FAQ',
  content7: 'Frequently asked questions',
  content10:
    'Lorem ipsum dolor sit amet. Vel dolores illum est aperiam quis nam voluptatem quia et omnis autem qui dolore ullam sed fugiat cumque! Qui accusamus assumenda et molestias eius et error sunt. Id recusandae nostrum ea officiis voluptatem in nisi consequatur sed quia tenetur sit alias molestias qui illum soluta.  Est nesciunt perferendis eum sint rerum 33 cupiditate dolorem id corrupti laboriosam ut debitis veniam ut ipsam fugit vel sunt consequatur. Et nobis quasi et cumque adipisci aut molestiae eligendi quo inventore dicta ea suscipit sequi sed veritatis nemo.',
  content1: 'Check out the latest videos and games created by Lucrious.',
  content9:
    'Let mxsonnrblx know if you have a question and we can update this!',
  button1: 'Privacy statement',
  content13:
    'Lorem ipsum dolor sit amet. Est vitae blanditiis ab aliquam tempore aut ipsam iusto in sunt repellat ex voluptatum inventore ab facilis galisum ea consequatur consequuntur. Ab voluptas voluptatem eum consequatur aspernatur non laboriosam atque est labore asperiores a neque quos.  Ea nemo modi hic dicta saepe et veritatis maiores At praesentium aliquid. Sed dolores architecto non doloribus quia eos consectetur commodi non tenetur vitae est neque omnis.  Non perspiciatis velit At aliquam rerum ut officiis ipsa id minima eius ut sapiente nobis et nemo neque. Aut maiores tempora in officiis sunt eum voluptatem tenetur sit iste reprehenderit ea nisi dolor. Ea impedit omnis ad internos autem ut esse sunt ad saepe maiores vel perferendis veritatis. Ex magni fugiat ut reprehenderit laudantium sit galisum ipsam eos tempora doloribus sed accusantium nobis eum praesentium quod.',
}

ContentList5.propTypes = {
  heading7: PropTypes.string,
  heading9: PropTypes.string,
  content2: PropTypes.string,
  heading4: PropTypes.string,
  heading2: PropTypes.string,
  content6: PropTypes.string,
  heading10: PropTypes.string,
  button2: PropTypes.string,
  content5: PropTypes.string,
  content12: PropTypes.string,
  heading8: PropTypes.string,
  heading6: PropTypes.string,
  heading5: PropTypes.string,
  content3: PropTypes.string,
  heading1: PropTypes.string,
  content11: PropTypes.string,
  heading3: PropTypes.string,
  heading13: PropTypes.string,
  heading12: PropTypes.string,
  content4: PropTypes.string,
  heading11: PropTypes.string,
  button: PropTypes.string,
  content7: PropTypes.string,
  content10: PropTypes.string,
  content1: PropTypes.string,
  content9: PropTypes.string,
  button1: PropTypes.string,
  content13: PropTypes.string,
}

export default ContentList5
