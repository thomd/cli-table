require 'guard/guard'

class ::Guard::Expresso < ::Guard::Guard
  def run_on_change(paths)
    passed = system @options[:runner]
    ::Guard::Notifier.notify(passed ? 'success' : 'failed ', :title => 'cli-table', :image => passed ? :success : :failed)
  end
end

notification :tmux
guard :expresso, :runner => 'make test' do
  watch(%r{(test|lib)/(.+)\.js})
end

# vim:ft=ruby
