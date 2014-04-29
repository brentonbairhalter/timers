define(['can', 'moment', 'bootstrap','domReady!'], function(can,moment){

        var podTimer = can.Control.extend({
            defaults: {
              'podTemplate':'templates/pods.mustache',
              'id': 0,
              'labelMessage': 'Please select a round',
              'rdData':[
                {'round': 0, 'dur': 30, 'text': 'Deck Construction'},
                {'round': 1, 'dur': 3000, 'text': 'Round 1'},
                {'round': 2, 'dur': 3000, 'text': 'Round 2'},
                {'round': 3, 'dur': 3000, 'text': 'Round 3'}
              ]
            }
        },{

            init: function(element) {
                var _this = this;
                this.display = new can.Map({
                  labelMessage: _this.options.labelMessage,
                  round: 0,
                  duration: 0
                });
                this.setDefaults();
                _this.element.append(can.view(_this.options.podTemplate, {
                    id: _this.options.id,
                    labelMessage: _this.display.attr('labelMessage'),
                    data: _this.options.rdData
                  }
                ));
            },
            setDefaults: function() {
                var _this = this;
                this.options.id = this.options.id + 1;
                this.interval = 1000;

            },
            '.js-round-select change': function(el){
                var _this = this;
                _this.display.attr('duration', el.find('option:selected').val());
                _this.display.attr('round', el.find('option:selected').data('round'));
                _this.display.attr('labelMessage', el.find('option:selected').data('text') + '...');
                
                _this.duration = moment.duration(_this.display.attr('duration') * 1000, 'milliseconds');

               _this.element.find('.clock').text(moment(_this.duration.asMilliseconds()).format('mm:ss'));
               _this.element.find('[data-update=start]').removeClass('hide').addClass('show');
               _this.element.find('[data-update=stop]').removeClass('show').addClass('hide');
               _this.element.find('[data-update=resume]').removeClass('show').addClass('hide');
            },
            '[data-update=start] click': function(el, ev){
              var _this = this;
              ev.preventDefault();
              if(_this.display.attr('duration') > 0){
                //start the timer with selected round
                _this.startCountDown();
              }else{
                //need to select a round
                _this.warn();
              }
            },
            '[data-update=stop] click': function(el, ev){
              var _this = this;
              ev.preventDefault();
                //stop the timer
                _this.stopCountDown();
            },
            '[data-update=resume] click': function(el, ev){
              var _this = this;
              ev.preventDefault();
                //stop the timer
                _this.startCountDown();
            },
            startCountDown: function(){
              var _this = this;
              
              _this.element.find('.message').text(_this.display.attr('labelMessage')).removeClass('hide').addClass('show');
              _this.element.find('[data-update=start]').removeClass('show').addClass('hide');
              _this.element.find('.js-round-select').removeClass('show').addClass('hide');
              _this.element.find('[data-update=stop]').removeClass('hide').addClass('show');
              _this.element.find('[data-update=resume]').removeClass('show').addClass('hide');

              _this.countdown = setInterval(function(){
                _this.duration = moment.duration(_this.duration.asMilliseconds() - _this.interval, 'milliseconds');
                _this.element.find('.clock').text(moment(_this.duration.asMilliseconds()).format('mm:ss'));
                console.log(_this.duration.asMilliseconds());
                if(_this.duration.asMilliseconds() === 9000){
                  _this.warnCountDown();
                }
                
                if(_this.duration.asMilliseconds() === 0){
                  _this.endCountDown();
                }
              }, _this.interval); 
            },
            stopCountDown: function(){
              var _this = this;
              //update display and clear vals
              _this.element.find('.message').text(_this.display.attr('labelMessage')).removeClass('show').addClass('hide');
              _this.element.find('[data-update=stop]').removeClass('show').addClass('hide');
              _this.element.find('.js-round-select').removeClass('hide').addClass('show');
              // $(_this.element).find('[data-update=start]').removeClass('hide').addClass('show');
              _this.element.find('[data-update=resume]').removeClass('hide').addClass('show');
              clearInterval(_this.countdown);
            },
            //completed round ... add a tally?
            endCountDown: function(){
              var _this = this;
              //update display and clear vals
              _this.element.find('.message').text(_this.display.attr('labelMessage')).removeClass('show').addClass('hide');
              _this.element.find('[data-update=stop]').removeClass('show').addClass('hide');
              _this.element.find('.js-round-select').removeClass('hide').addClass('show');
              _this.element.find('[data-update=start]').removeClass('show').addClass('hide');
              _this.element.find('.clock').removeClass('show').addClass('hide');
              _this.element.find('[data-update=resume]').removeClass('show').addClass('hide');

              clearInterval(_this.countdown);
            },
            warnCountDown: function(){
              var _this = this;
              $(_this.element).addClass('warn-box');
            },
            warn: function(){
              //helper message for something that needs entered
            }
        }
    );
    return podTimer;
});
