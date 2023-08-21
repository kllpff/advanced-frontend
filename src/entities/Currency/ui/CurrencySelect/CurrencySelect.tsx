import { Currency } from 'entities/Currency/model/types/currency'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select } from 'shared/ui/Select/Select'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [onChange])

  return (
    <Select
      label={t('currency')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      className={classNames('', {}, [className])}
      readonly={readonly}
    />
  )
})
