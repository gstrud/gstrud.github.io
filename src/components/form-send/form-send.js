import React, { Component } from 'react';
import './form-send.css';

export default class FormSend extends Component {
  render() {
    return (
      <>
        <div className='form' id='form-send'>
          <div className='cont-app'>
            <div className='worker-info'>
              <h1>Добрый день, уважаемые работодатели!</h1>
              <p>
                Данный раздел предназначен для формирования и отправки ваших
                заявок на почту ГСТ
              </p>
            </div>
            <div className='black'></div>
            <form
              className='row g-3 form-send'
              action='https://formspree.io/gstrud@mail.ru'
              method='POST'
            >
              <div>
                <div className='col-md-12'>
                  <label htmlFor='validationDefault01' className='form-label'>
                    Название организации
                  </label>
                  <div className='input-group'>
                    <span className='input-group-text' id='inputGroupPrepend1'>
                      <i className='bi bi-building'></i>
                    </span>
                    <input
                      type='text'
                      name='organization'
                      className='form-control'
                      id='validationDefault01'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <label htmlFor='validationDefault02' className='form-label'>
                    Адрес
                  </label>
                  <div className='input-group'>
                    <span className='input-group-text' id='inputGroupPrepend1'>
                      <i className='bi bi-geo-alt'></i>
                    </span>
                    <input
                      type='text'
                      name='address'
                      className='form-control'
                      id='validationDefault02'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label htmlFor='validationEmail' className='form-label'>
                        Почта
                      </label>
                      <div className='input-group'>
                        <span
                          className='input-group-text'
                          id='inputGroupPrepend2'
                        >
                          <i className='bi bi-envelope'></i>
                        </span>
                        <input
                          type='email'
                          name='email'
                          className='form-control'
                          id='validationEmail'
                          aria-describedby='inputGroupPrepend2'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <label htmlFor='validationPhone' className='form-label'>
                        Телефон
                      </label>
                      <div className='input-group'>
                        <span
                          className='input-group-text'
                          id='inputGroupPrepend1'
                        >
                          <i className='bi bi-telephone'></i>
                        </span>
                        <input
                          type='phone'
                          name='phone'
                          className='form-control'
                          id='validationPhone'
                          aria-describedby='inputGroupPrepend1'
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label
                        htmlFor='validationDefault03'
                        className='form-label'
                      >
                        ФИО контактного лица
                      </label>
                      <div className='input-group'>
                        <span
                          className='input-group-text'
                          id='inputGroupPrepend1'
                        >
                          <i className='bi bi-person'></i>
                        </span>
                        <input
                          type='text'
                          name='contact-person'
                          className='form-control'
                          id='validationDefault03'
                          required
                        />
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <label
                        htmlFor='validationDefault04'
                        className='form-label'
                      >
                        должность
                      </label>
                      <div className='input-group'>
                        <span
                          className='input-group-text'
                          id='inputGroupPrepend1'
                        >
                          <i className='bi bi-person-video3'></i>
                        </span>
                        <input
                          type='text'
                          name='position'
                          className='form-control'
                          id='validationDefault04'
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='new-item'>
                  <div className='row'>
                    <div className='col-md-12'>
                      <label
                        htmlFor='validationDef01'
                        className='form-label'
                        // for='exampleFormControlTextarea1'
                      >
                        Описания вакансий
                      </label>
                      <div className='input-group'>
                        <span
                          className='input-group-text'
                          id='inputGroupPrepend1'
                        >
                          <i className='bi bi-person-workspace'></i>
                        </span>
                        <textarea
                          name='job-descriptions'
                          className='form-control'
                          id='exampleFormControlTextarea1'
                          rows='5'
                          required
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className='col-12'>
                  <div className='form-check'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value=''
                      id='invalidCheck2'
                      required
                    />
                    <span className='form-check-label' htmlFor='invalidCheck2'>
                      Я даю согласие на обработку персональных данных
                    </span>
                    <br />
                    <span>
                      * В соответствии с требованиями статьи 9 Федерального
                      закона от 27.07.2006 № 152-ФЗ «О персональных данных»
                    </span>
                  </div>
                </div>
                <br />
                <div className='col-12'>
                  <button className='btn btn-primary btn-send' type='submit'>
                    Отправить
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
